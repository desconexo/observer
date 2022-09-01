import { Observer } from "./observer";
import { User } from "./user";

export class Chat implements Observer {
    #user: User

    constructor(user: User) {
        this.#user = user
        this.user.subject.register(this)
    }

    notify(message: String, userSender: User) {
        console.log(userSender.name, "says [", message, "] to", this.user.name)
    }

    get user():User {
        return this.#user
    }

}