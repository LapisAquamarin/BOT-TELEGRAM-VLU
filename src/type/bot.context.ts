import {Context} from "telegraf";
import {UserData} from "./user.data";

export interface BotContext extends Context {
    session: UserData;
}