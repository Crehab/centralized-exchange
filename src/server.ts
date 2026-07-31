import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 }); // create new server

// client connects to the server.
wss.on('connection', function connection(ws) {
  console.log('A new client connected!');

  // do this when THIS specific client sends message.
  ws.on('message', function message(data) {
    console.log('Received raw data from client:', data.toString());
    // send a message back to the client.
    ws.send('Message received by the exchange server.')
  });
});

console.log("WebSocket Server is running on ws://localhost:8080");
