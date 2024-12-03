import { sleep } from "bun";
import type { PolymarketAPIClient } from "../polymarket-api/polymarket.service";
import type { TelegramService } from "../telegram/telegram.service";
import type { PrismaClient } from "@prisma/client";
import type { PolymarketMarketsResponse } from "../polymarket-api/types/polymarket-markets-response";

interface HistoryPoint {
  t: number;
  p: number;
}

interface MarketData {
  market: string;
  history: HistoryPoint[];
}

export class PriceChangeScreener {
  private isRunning = false;

  constructor(
    private readonly polymarketApi: PolymarketAPIClient,
    private readonly database: PrismaClient,
    private readonly telegramService: TelegramService,
  ) {}

  public async run() {
    this.isRunning = true;
    while (this.isRunning) {
      try {
        console.log("getting markets");

        const currentBets = await this.polymarketApi.getAllCurrentMarkets();
        console.log(currentBets.length, "currentBets length");
        for (const currentBet of currentBets) {
          try {
            const clobs: string[] = JSON.parse(currentBet.clobTokenIds);
            const priceData = await this.polymarketApi.priceHistory(
              clobs[0],
              "1d",
            );
            await this.checkPriceChange(
              { market: clobs[0], history: priceData!.history },
              currentBet,
            );
          } catch (error) {
            console.log(error);
            console.log(
              "failed to calucalate price change for bet",
              currentBet.question,
            );
          }
        }
        await sleep(60000);
      } catch (error) {
        console.log(error);
      }
    }
  }

  private async checkPriceChange(
    data: MarketData,
    currentBet: PolymarketMarketsResponse,
  ): Promise<void> {
    const oneHourAgo = Date.now() / 1000 - 3600;
    const recentHistory = data.history.filter((point) => point.t >= oneHourAgo);

    if (recentHistory.length < 2) {
      return;
    }

    const oldestPrice = recentHistory[0].p * 100;
    const newestPrice = recentHistory[recentHistory.length - 1].p * 100;
    const priceChange = Math.abs(newestPrice - oldestPrice);
    if (priceChange > 5) {
      try {
        const existingRecord = await this.database.priceChange.findFirst({
          where: {
            clobId: data.market,
            timestamp: {
              gte: new Date(oneHourAgo * 1000),
            },
          },
          orderBy: {
            timestamp: "desc",
          },
        });

        if (!existingRecord) {
          await this.database.priceChange.create({
            data: {
              clobId: data.market,
              changePercentage: priceChange,
              timestamp: new Date(),
            },
          });
          const url = `https://polymarket.com/event/${currentBet.events[0]?.slug}`;
          await this.telegramService.sendPriceChangeMessage(
            `${currentBet.question}\n${url}\n\n
Price Changed for ${priceChange.toFixed(2)}% last hour`,
          );
        } else {
          console.log(`Already created ${currentBet.question}`);
        }
      } catch (error) {
        console.error("Db eror", error);
      }
    } else {
      console.log(
        `Price change (${priceChange.toFixed(2)}%) is smaller than 5% for market ${currentBet.question}`,
      );
    }
  }

  public stop() {
    this.isRunning = false;
  }
}
