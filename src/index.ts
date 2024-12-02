import { TelegramService } from "./services/telegram/telegram.service";
import { NewBetScreener } from "./services/new-bet-screener/new-bet-screener";
import { PolymarketAPIClient } from "./services/polymarket-api/polymarket.service";
import { prisma } from "./services/database/database";

(async () => {
  const telegramService = new TelegramService();
  const polymarketApi = new PolymarketAPIClient();
  const newBetScreener = new NewBetScreener(
    polymarketApi,
    prisma,
    telegramService,
  );
  newBetScreener.run();
})();
