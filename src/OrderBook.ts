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
       return  b.price - a.price; // Descending order for bids (Buy orders)
        
      })
    } else {
      this.asks.push(newOrder);
      // ask sorting is here
      this.asks.sort((a, b): number  => {
        return a.price - b.price;// Ascending order for asks (Sell orders)
      })
    }
    this.match() // try to match immediately after adding
  }
  // TODO -  The Matching Algorithm 
  // write the logic that connects a buyer and a seller.

    match() {
      while(this.bids.length > 0 && this.asks.length > 0) {
        if (this.bids.price >= this.asks.price) {
          Math.min(this.bids.quantity, this.asks.quantity);
          const subtract = this.bids.quantity - this.asks.quantity;
          if (this.bids.quantity === null) {
            this.bids.shift()
          } else if (this.asks.quantity === null) {
            this.asks.shift()
          }
        } else
          break;
      }
    }


  
}

