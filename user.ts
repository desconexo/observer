export class User  {
    #name: String
    #mail: String

    constructor(name: String, mail: String) {
        this.#name = name
        this.#mail = mail
    }

    get name():String {
        return this.#name
    }

    get mail():String {
        return this.#name
    }
}