import type { Order } from "./interface.js";

export class OrderBook {
  bids: Order[] = [];
  asks: Order[] = [];

  // this is the method to process new Orders.
  addOrder(newOrder: Order) {
    if (newOrder.side === "buy") {
      this.bids.push(newOrder);
      // bids sorting is here
      this.bids.sort((a, b): number => {
       return  b.price - a.price; // Desending order for bids (Buy orders)
        
      })
    } else {
      this.asks.push(newOrder);
      // ask soring is here
      this.asks.sort((a, b): number  => {
        return a.price - b.price;// Ascending order for asks (Sell orders)
      })
    }
  }
}
