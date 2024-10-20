import { onCommand } from "./message.listener";
import setMyCommand from "./my.command";

export default async () => {
    await setMyCommand()

    onCommand()
}