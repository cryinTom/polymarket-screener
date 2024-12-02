import { Telegraf } from "telegraf";

export class TelegramService {
  private bot = new Telegraf(process.env.BOT_TOKEN as string);
  private chatId = -1002375825024;
  private betsTopicId = 4;
  private priceChangeTopicId = 2;

  async sendNewBetMessage(message: string): Promise<void> {
    try {
      await this.bot.telegram.sendMessage(this.chatId, message, {
        message_thread_id: this.betsTopicId,
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  async sendPriceChangeMessage(message: string): Promise<void> {
    try {
      await this.bot.telegram.sendMessage(this.chatId, message, {
        message_thread_id: this.priceChangeTopicId,
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }
}
