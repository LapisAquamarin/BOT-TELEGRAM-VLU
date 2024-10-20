import process from "node:process";
import bot from "./bot";
import { logger } from "./utils/loggers";
import command from "./command/command.sheet"

(async () => {
    try {
        const botInfo = await bot.telegram.getMe();
        logger.info(`🚀 Bot [${botInfo.username}] started.`);
        await command()

    } catch (error) {
        logger.error("Failed to start: ", error)
    }
}) ();

bot.launch().catch(err => {
    logger.error("Failed to launch: ", err);
})

process.on('SIGINT', async () => {
    logger.info('Bot shutting down...');
    process.exit();
});

process.once('SIGTERM', async () => {
    logger.info('Bot shutting down...');
    process.exit();
});