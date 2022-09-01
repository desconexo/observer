import { Observer } from './observer'
import { User } from './user'

export class Subject {
    #observerCollection = new Set<Observer>()
    #userSender?: User
    
    register(observer: Observer) : void {
        this.#observerCollection.add(observer)
    }

    unregister(observer: Observer): void {
        this.#observerCollection.delete(observer)
    }

    notify(message?: String) {
        if(this.#userSender == null) {
            throw "user sender must not be null"
        }

        this.#observerCollection.forEach(observer => {
            observer.notify(message, this.userSender)
        });
    }

    set userSender(user: User) {
        this.#userSender = user
    }

    get userSender():User {
        return this.#userSender!
    }
}