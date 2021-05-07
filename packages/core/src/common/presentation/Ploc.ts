type Subscription<S> = (state: S) => void;

export abstract class Ploc<S> {
    private internalState: S;
    private listeners: Subscription<S>[] = [];

    constructor(initalState: S) {
        this.internalState = initalState;
    }

    public get state(): S {
        return this.internalState;
    }

    changeState(state: S) {
        this.internalState = state;

        if (this.listeners.length > 0) {
            this.listeners.forEach(listener => listener(this.state));
        }
    }

    subscribe(listener: Subscription<S>) {
        this.listeners.push(listener);
    }

    unsubscribe(listener: Subscription<S>) {
        const index = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    }
}
