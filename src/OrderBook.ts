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
  // write the logic that connects a buyer and a seller.

  match() {

    while (this.bids.length > 0 && this.asks.length > 0) {

      const topBid = this.bids[0];
      const topAsk = this.asks[0];

      if(!topBid || !topAsk) break; // safety check, if undefined, break the loop.

        if (topBid.price >= topAsk.price) {
          const tradedQuantity = Math.min(topBid.quantity, topAsk.quantity);
          topBid.quantity -= tradedQuantity;
          topAsk.quantity -= tradedQuantity;

          if (topBid.quantity === 0)
            this.bids.shift()

          if (topAsk.quantity === 0)
            this.asks.shift()
        } else {
          // highest buyer wont payer lowest seller then, break the loop. no more trade.
            break;
        }
    }
  }
}
