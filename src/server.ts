import { error } from 'console';
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 }); // create new server

// client connects to the server.
wss.on('connection', function connection(ws) {
  console.log('A new client connected!');

  // do this when THIS specific client sends message.
    ws.on('message', function message(data) {
        // convert raw data string to JSON format.
        const messageString = data.toString();

        try {
            const parsedMessage = JSON.parse(messageString);
            // CREATE ORDER ACTION
            if (parsedMessage.action === 'CREATE_ORDER') {
                console.log("Client wants to create an order!");
                console.log("Order details:", parsedMessage.data);

                // send A JSON object back confirming order receipt.
                ws.send(JSON.stringify({ status: "success", message: "Order received" }));
            } else {
                console.log("Unknown action received.");
            }
        }
        catch (error) {
            console.error("Error parsing message:", error);
            ws.send(JSON.stringify({ status: "error", message: "Invalid JSON in message" }));
        }
    });
});

console.log("WebSocket Server is running on ws://localhost:8080");
