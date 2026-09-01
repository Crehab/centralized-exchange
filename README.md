
# Centralized Cryptocurrency Exchange

A high-performance centralized exchange (CEX) backend built with **TypeScript** and **Node.js**.

## What is this?
This project is a real-time order matching engine, which is the core infrastructure behind any centralized exchange (like Binance, Coinbase, or traditional stock markets). It accepts buy and sell orders from multiple concurrent users, places them in an order book, and matches them according to price-time priority.

## Why build this?
Building an exchange from scratch is an excellent way to solve complex backend engineering challenges:
- **State Management:** Managing a highly active, in-memory data structure (the Order Book).
- **Algorithm Design:** Implementing fast sorting and matching algorithms to process trades instantly.
- **Concurrency:** Handling multiple clients connected simultaneously via WebSockets without race conditions.

## Who is this for?
This project demonstrates foundational concepts used in the **FinTech, High-Frequency Trading (HFT), and Web3/Crypto industries**. It shows how a central authority securely processes and executes trades between market participants.

## Features (So Far)
- **TypeScript Foundation:** Strictly typed order interfaces and classes.
- **In-Memory Order Book:** Processes `bids` (buy orders) and `asks` (sell orders) using custom arrays and sorting logic.
- **Matching Engine:** Automatically executes trades when the highest bid is equal to or greater than the lowest ask.
- **WebSocket API:** A real-time, bi-directional server that allows clients to connect, send `CREATE_ORDER` payloads in JSON, and receive execution statuses.

---

## How to Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- Git installed on your machine.

### Installation

1. **Fork and Clone the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/centralized-exchange.git
   cd centralized-exchange
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Compile the TypeScript Code**
   ```bash
   npm run build
   # or npx tsc
   ```

4. **Start the WebSocket Server**
   ```bash
   npm run startServer
   # or node dist/server.js
   ```
   *The server will start listening on `ws://localhost:8080`.*

### Testing the API
You can test the connection by opening your browser's developer console on any blank webpage and typing:

```javascript
// 1. Connect to the server
const client = new WebSocket("ws://localhost:8080");

// 2. Send a Buy Order
client.send(JSON.stringify({
  action: "CREATE_ORDER",
  data: {
    userId: "user_1",
    price: 100,
    quantity: 1,
    side: "buy"
  }
}));

// 3. Send a Sell Order
client.send(JSON.stringify({
  action: "CREATE_ORDER",
  data: {
    userId: "user_1",
    price: 100,
    quantity: 1,
    side: "sell"
  }
}));



```

---

*This project is currently under active development.*
