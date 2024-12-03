import { TelegramService } from "./services/telegram/telegram.service";
import { NewBetScreener } from "./services/new-bet-screener/new-bet-screener";
import { PolymarketAPIClient } from "./services/polymarket-api/polymarket.service";
import { PriceChangeScreener } from "./services/price-change-screener/price-change-screener";
import { prisma } from "./services/database/database";

(async () => {
  const telegramService = new TelegramService();
  const polymarketApi = new PolymarketAPIClient();
  const newBetScreener = new NewBetScreener(
    polymarketApi,
    prisma,
    telegramService,
  );
  const priceChangeScreener = new PriceChangeScreener(
    polymarketApi,
    prisma,
    telegramService,
  );

  newBetScreener.run();
  priceChangeScreener.run();
})();
