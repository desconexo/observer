import { Observer } from "./observer";

export class Chat implements Observer {
    notify() {
        console.log("Log de chat")
    }

}