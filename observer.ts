import { User } from "./user";

export interface Observer {
    notify(message?: String, user?: User)
}