import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 }); // create new server

wss.on('connection', function connection(ws) {
  console.log(`A new client connected!`);


  
}