export interface PolymarketMarketsResponse {
  readonly id: string;
  readonly question: string;
  readonly conditionId: string;
  readonly slug: string;
  readonly resolutionSource: string;
  readonly endDate: Date;
  readonly liquidity: string;
  readonly startDate: Date;
  readonly image: string;
  readonly icon: string;
  readonly description: string;
  readonly outcomes: Outcomes;
  readonly outcomePrices: string;
  readonly volume: string;
  readonly active: boolean;
  readonly closed: boolean;
  readonly marketMakerAddress: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly new: boolean;
  readonly featured: boolean;
  readonly submitted_by: SubmittedBy;
  readonly archived: boolean;
  readonly resolvedBy: ResolvedBy;
  readonly restricted: boolean;
  readonly groupItemTitle: string;
  readonly groupItemThreshold: string;
  readonly questionID: string;
  readonly enableOrderBook: boolean;
  readonly orderPriceMinTickSize: number;
  readonly orderMinSize: number;
  readonly volumeNum: number;
  readonly liquidityNum: number;
  readonly endDateIso: Date;
  readonly startDateIso: Date;
  readonly hasReviewedDates: boolean;
  readonly volume24hr?: number;
  readonly clobTokenIds: string;
  readonly umaBond: string;
  readonly umaReward: string;
  readonly volume24hrClob?: number;
  readonly volumeClob: number;
  readonly liquidityClob: number;
  readonly acceptingOrders: boolean;
  readonly negRisk: boolean;
  readonly _sync: boolean;
  readonly events: Event[];
  readonly ready: boolean;
  readonly funded: boolean;
  readonly acceptingOrdersTimestamp: Date;
  readonly cyom: boolean;
  readonly competitive: number;
  readonly pagerDutyNotificationEnabled: boolean;
  readonly approved: boolean;
  readonly clobRewards: ClobReward[];
  readonly rewardsMinSize: number;
  readonly rewardsMaxSpread: number;
  readonly spread: number;
  readonly lastTradePrice: number;
  readonly bestBid: number;
  readonly bestAsk: number;
  readonly automaticallyActive: boolean;
  readonly clearBookOnStart: boolean;
  readonly seriesColor: string;
  readonly showGmpSeries?: boolean;
  readonly showGmpOutcome?: boolean;
  readonly manualActivation: boolean;
  readonly negRiskOther: boolean;
  readonly negRiskMarketID?: string;
  readonly negRiskRequestID?: string;
  readonly oneDayPriceChange?: number;
}

interface ClobReward {
  readonly id: string;
  readonly conditionId: string;
  readonly assetAddress: AssetAddress;
  readonly rewardsAmount: number;
  readonly rewardsDailyRate: number;
  readonly startDate: Date;
  readonly endDate: Date;
}

enum AssetAddress {
  The0X2791Bca1F2De4661ED88A30C99A7A9449Aa84174 = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
}

interface Event {
  readonly id: string;
  readonly ticker: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly resolutionSource?: string;
  readonly startDate: Date;
  readonly creationDate: Date;
  readonly endDate: Date;
  readonly image: string;
  readonly icon: string;
  readonly active: boolean;
  readonly closed: boolean;
  readonly archived: boolean;
  readonly new: boolean;
  readonly featured: boolean;
  readonly restricted: boolean;
  readonly liquidity: number;
  readonly volume: number;
  readonly openInterest: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly competitive: number;
  readonly volume24hr: number;
  readonly enableOrderBook: boolean;
  readonly liquidityClob: number;
  readonly _sync: boolean;
  readonly negRisk: boolean;
  readonly commentCount: number;
  readonly cyom: boolean;
  readonly showAllOutcomes: boolean;
  readonly showMarketImages: boolean;
  readonly enableNegRisk: boolean;
  readonly automaticallyActive: boolean;
  readonly gmpChartMode: GmpChartMode;
  readonly negRiskAugmented: boolean;
  readonly sortBy?: string;
  readonly negRiskMarketID?: string;
}

enum GmpChartMode {
  Default = "default",
}

export enum Outcomes {
  YesNo = "[\"Yes\", \"No\"]",
}

enum ResolvedBy {
  The0X2F5E3684Cb1F318Ec51B00Edba38D79Ac2C0AA9D = "0x2F5e3684cb1F318ec51b00Edba38d79Ac2c0aA9d",
  The0X6A9D222616C90FcA5754Cd1333CFD9B7Fb6A4F74 = "0x6A9D222616C90FcA5754cd1333cFD9b7fb6a4F74",
}

enum SubmittedBy {
  The0X91430CAD2D3975766499717FA0D66A78D814E5C5 = "0x91430CaD2d3975766499717fA0D66A78D814E5c5",
}

