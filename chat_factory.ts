import { Chat } from "./chat";
import { User } from "./user";

export abstract class ChatFactory {
    static of(user: User):Chat {
        return new Chat(user)
    }
}