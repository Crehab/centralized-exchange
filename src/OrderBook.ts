import type { Order } from "./interface.js";

export class OrderBook {
  bids: Order[] = [];
  asks: Order[] = [];

  // this is the method to process new Orders.
  addOrder(newOrder: Order) {
    if (newOrder.side === "Buy") {
      this.bids.push(newOrder);
      
    } else {
      this.asks.push(newOrder);
    }
  }
}

 