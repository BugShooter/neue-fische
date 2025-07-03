// 5. Stock Ticker App

const log = console.log

class StockTicker {
    private subscribers: ((price?: number) => void)[] = [];
    constructor(private price: number = 0) { }
    subscribe(fn: (price?: number) => void): () => void {
        this.subscribers.push(fn);
        // return runction to unsubscribe
        return () => {
            this.subscribers = this.subscribers
                .filter(storedFn => storedFn !== fn);
        }
    }
    setPrice(price: number) {
        if (price < 0) throw new Error("Price can't be lower then 0");
        this.price = Number(price.toFixed(2));
        log(`Price is changed. Current price is ${this.price}`);
        this.subscribers.forEach(fn => fn(this.price));
    }
}

export function main() {
    log("5. Stock Ticker App");

    const ticker = new StockTicker();
    type UnsubscribeFunction = (() => void) | null;
    let unsubscribeBrocker1: UnsubscribeFunction = ticker.subscribe((price) => log(`Brocker 1 notified of price change (${price}).`));
    let unsubscribeBrocker2: UnsubscribeFunction = ticker.subscribe((price) => log(`Brocker 2 notified of price change (${price}).`));
    ticker.setPrice(500);

    return new Promise<void>((resolve) => {
        let interval = setInterval(() => {
            ticker.setPrice(Math.random() * 500);
            if (unsubscribeBrocker1 && Math.random() < 0.4) {
                unsubscribeBrocker1();
                log("Brocker 1 is unstubscribed");
                unsubscribeBrocker1 = null;
            }
            if (unsubscribeBrocker2 && Math.random() < 0.4) {
                unsubscribeBrocker2();
                log("Brocker 2 is unstubscribed");
                unsubscribeBrocker2 = null;
            }

            if (!unsubscribeBrocker1 && !unsubscribeBrocker2 && Math.random() < 0.4) {
                log("Out of Stock!");
                clearInterval(interval);
                resolve();
            }
        }, 2000);
    });
}
