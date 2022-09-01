import { User } from "./user";

export abstract class UserFactory {
    static of(name: String, mail: String): User {
        return new User(name, mail)
    }
}