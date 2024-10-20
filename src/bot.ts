import { session, Telegraf} from 'telegraf'
import { UserData } from './type/user.data';
import { BotContext } from './type/bot.context';

const bot = new Telegraf<BotContext>("7723925757:AAHimdCS-sHn0pEWm-tEmLlG4lTMMfA8fws");
const userData = {} as UserData;
bot.use(session({
    defaultSession: () => userData,
}));

export default bot
