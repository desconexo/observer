import { Subject } from "./subject"

export class User  {
    #name: String
    #mail: String
    #subject: Subject

    constructor(name: String, mail: String, subject: Subject) {
        this.#name = name
        this.#mail = mail
        this.#subject = subject
        this.subject.userSender = this
    }

    get name():String {
        return this.#name
    }

    get mail():String {
        return this.#name
    }

    get subject():Subject {
        return this.#subject
    }
}