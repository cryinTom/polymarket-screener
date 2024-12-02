export interface PolymarketPriceHistoryResponse {
  readonly history: History[];
}

export interface History {
  readonly t: number;
  readonly p: number;
}
