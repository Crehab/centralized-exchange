import { WebSocketServer } from "ws";
import { OrderBook } from "./orderBook.js";

// create the orderbook instance for this specific client connection.
const orderBook = new OrderBook();

const wss = new WebSocketServer({ port: 8080 }); // create new server

// client connects to the server.
wss.on("connection", function connection(ws) {
    console.log("A new client connected!");

    // do this when THIS specific client sends message.
    ws.on("message", function message(data) {
        try {
            // convert raw data string to JSON format.
            const messageString = data.toString();
            const parsedMessage = JSON.parse(messageString);
            // CREATE ORDER ACTION
            if (parsedMessage.action === "CREATE_ORDER") {
                console.log("Client wants to create an order!");
                console.log("Order details:", parsedMessage.data);

                // capture the data field in a new variable called order.
                const order = parsedMessage.data;
                // pass it to the orderBook's addOrder method to process it using match().
                orderBook.addOrder(order);
                console.log("Bids:", orderBook.bids);
                console.log("Asks:", orderBook.asks);
                // send A JSON object back confirming order receipt.
                ws.send(
                    JSON.stringify({
                        status: "success",
                        message: "Order has been placed and processed.",
                    }),
                );
            } else {
                ws.send(
                    JSON.stringify({
                        status: "fail",
                        message: "Order could not be placed and processed.",
                    }),
                );
            }
        } catch (error) {
            console.error("Error parsing message:", error);
            ws.send(
                JSON.stringify({
                    status: "error",
                    message: "Invalid JSON in message",
                }),
            );
        }
    });
});

console.log("WebSocket Server is running on ws://localhost:8080");
