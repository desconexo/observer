import { Observer } from './observer'

export class Subject {
    #observerCollection = new Set<Observer>()
    
    register(observer: Observer) : void {
        this.#observerCollection.add(observer)
    }

    unregister(observer: Observer): void {
        this.#observerCollection.delete(observer)
    }

    notify() {
        this.#observerCollection.forEach(observer => {
            observer.notify()
        });
    }
}