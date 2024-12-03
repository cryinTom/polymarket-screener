import type { GetMarketsDto } from "./types/dto/get-markets.dto";
import type { PolymarketMarketResponse } from "./types/polymarket-market-response";
import type { PolymarketMarketsResponse } from "./types/polymarket-markets-response";
import type { PolymarketPriceHistoryResponse } from "./types/polymarket-price-history-response";

export class PolymarketAPIClient {
  private baseUrl = "https://gamma-api.polymarket.com/";
  private clobApiUrl = "https://clob.polymarket.com/";

  public async priceHistory(
    clobId: string,
    interval: string,
  ): Promise<PolymarketPriceHistoryResponse | null> {
    try {
      const data = await fetch(
        this.clobApiUrl +
          "prices-history?" +
          new URLSearchParams({
            market: String(clobId),
            interval: String(interval),
          }),
      );
      const priceHistory: PolymarketPriceHistoryResponse = await data.json();
      return priceHistory;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  public async getBetInfo(
    betId: string,
  ): Promise<PolymarketMarketResponse | null> {
    try {
      const data = await fetch(this.baseUrl + `markets/${betId}`);
      const marketData: PolymarketMarketResponse = await data.json();
      return marketData;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  public async getMarkets(
    getMarketsDto: GetMarketsDto,
  ): Promise<PolymarketMarketsResponse[]> {
    const { limit, order, ascending } = getMarketsDto;
    try {
      const data = await fetch(
        this.baseUrl +
          "markets?" +
          new URLSearchParams({
            limit: String(limit),
            order: String(order),
            ascending: String(ascending),
          }),
      );
      const marketData: PolymarketMarketsResponse[] = await data.json();
      return marketData;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  public async getAllCurrentMarkets(): Promise<PolymarketMarketsResponse[]> {
    try {
      const markets: PolymarketMarketsResponse[] = [];
      let i = 0;
      while (i < 10) {
        const data = await fetch(
          this.baseUrl +
            "markets?" +
            new URLSearchParams({
              limit: "500",
              order: "liquidity",
              ascending: "false",
              active: "true",
              closed: "false",
              offset: String(i * 500),
            }),
        );
        const marketData: PolymarketMarketsResponse[] = await data.json();
        if (!marketData.length) {
          break;
        }
        markets.push(...marketData);
        i++;
      }
      return markets;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
