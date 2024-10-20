import bot from "../bot";

const setMyCommand = async () => {
    await bot.start((ctx) => {
        ctx.reply('Welcome! How can I help you today?');
      });

    await bot.telegram.setMyCommands([
        {
            command: "start",
            description: "Start your bot"
        },
        {
            command: "/add_channel",
            description: "Add to channel"
        },
    ])
}

export default setMyCommand;