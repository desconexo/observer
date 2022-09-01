import { Observer } from "./observer";
import { User } from "./user";

export class Chat implements Observer {
    #user: User

    constructor(user: User) {
        this.#user = user
    }

    notify(message: String) {
        console.log(this.user.name, " says ", message)
    }

    get user():User {
        return this.#user
    }

}