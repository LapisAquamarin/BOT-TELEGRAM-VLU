import bot from "../bot";
import { BotContext } from "../type/bot.context";

export const onCommand = () => {
    bot.command('add_channel', async (ctx: BotContext) => {
        ctx.reply("Listening to channel for adding")
    })
}