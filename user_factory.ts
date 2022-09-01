import { Subject } from "./subject";
import { User } from "./user";

export abstract class UserFactory {
    static of(name: String, mail: String, subject: Subject): User {
        return new User(name, mail, subject)
    }
}