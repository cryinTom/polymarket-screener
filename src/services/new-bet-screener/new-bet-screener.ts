import { sleep } from "bun";
import type { PolymarketAPIClient } from "../polymarket-api/polymarket.service";
import type { TelegramService } from "../telegram/telegram.service";
import type { PrismaClient } from "@prisma/client";

export class NewBetScreener {
  private isRunning = false;

  constructor(
    private readonly polymarketApi: PolymarketAPIClient,
    private readonly database: PrismaClient,
    private readonly telegramService: TelegramService,
  ) {}

  public async run() {
    this.isRunning = true;
    while (this.isRunning) {
      const currentBets = await this.polymarketApi.getMarkets({
        limit: 10,
        order: "createdAt",
        ascending: false,
      });
      for (const currentBet of currentBets) {
        const existingBet = await this.database.bet.findFirst({
          where: {
            id: currentBet.id,
          },
        });
        if (!existingBet) {
          const newBet = await this.database.bet.create({
            data: {
              id: currentBet.id,
              description: currentBet.description,
              question: currentBet.question,
            },
          });
          await this.telegramService.sendNewBetMessage(
            `${newBet.question}\n\n${newBet.description}`,
          );
        }
      }
      await sleep(60000);
    }
  }

  public stop() {
    this.isRunning = false;
  }
}
