export interface PolymarketMarketResponse {
  readonly id: string;
  readonly question: string;
  readonly conditionId: string;
  readonly slug: string;
  readonly resolutionSource: string;
  readonly endDate: Date;
  readonly liquidity: string;
  readonly startDate: Date;
  readonly fee: string;
  readonly image: string;
  readonly icon: string;
  readonly description: string;
  readonly outcomes: string;
  readonly outcomePrices: string;
  readonly volume: string;
  readonly active: boolean;
  readonly marketType: string;
  readonly closed: boolean;
  readonly marketMakerAddress: string;
  readonly updatedBy: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly wideFormat: boolean;
  readonly new: boolean;
  readonly featured: boolean;
  readonly submitted_by: string;
  readonly archived: boolean;
  readonly resolvedBy: string;
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
  readonly commentsEnabled: boolean;
  readonly volume24hr: number;
  readonly secondsDelay: number;
  readonly clobTokenIds: string;
  readonly umaBond: string;
  readonly umaReward: string;
  readonly fpmmLive: boolean;
  readonly volume24hrClob: number;
  readonly volumeClob: number;
  readonly liquidityClob: number;
  readonly makerBaseFee: number;
  readonly takerBaseFee: number;
  readonly customLiveness: number;
  readonly acceptingOrders: boolean;
  readonly negRisk: boolean;
  readonly notificationsEnabled: boolean;
  readonly _sync: boolean;
  readonly creator: string;
  readonly ready: boolean;
  readonly funded: boolean;
  readonly cyom: boolean;
  readonly competitive: number;
  readonly pagerDutyNotificationEnabled: boolean;
  readonly approved: boolean;
  readonly clobRewards: ClobReward[];
  readonly rewardsMinSize: number;
  readonly rewardsMaxSpread: number;
  readonly spread: number;
  readonly oneDayPriceChange: number;
  readonly lastTradePrice: number;
  readonly bestBid: number;
  readonly bestAsk: number;
  readonly automaticallyActive: boolean;
  readonly clearBookOnStart: boolean;
  readonly manualActivation: boolean;
  readonly negRiskOther: boolean;
}

interface ClobReward {
  readonly id: string;
  readonly conditionId: string;
  readonly assetAddress: string;
  readonly rewardsAmount: number;
  readonly rewardsDailyRate: number;
  readonly startDate: Date;
  readonly endDate: Date;
}

