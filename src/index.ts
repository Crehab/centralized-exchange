import type { Order } from "./interface.js";
import { OrderBook } from "./orderBook.js";

const order1: Order = {
    userId: "1",
    price: 100,
    quantity: 1,
    side: "buy"
}
const order2: Order = {
    userId: "2",
    price: 100,
    quantity: 1,
    side: "sell"
}

const myBook = new OrderBook();
myBook.addOrder({ userId: "1", side: "buy", price: 100, quantity: 2 });
myBook.addOrder({ userId: "2", side: "buy", price: 105, quantity: 5 });
myBook.addOrder({ userId: "3", side: "sell", price: 110, quantity: 1 });
myBook.addOrder({ userId: "4", side: "sell", price: 108, quantity: 3 });

console.log("BIDS (Buyers):", myBook.bids);
console.log("ASKS (Sellers):", myBook.asks);
