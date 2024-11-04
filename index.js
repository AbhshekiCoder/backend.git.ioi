const express = require('express');
const app = express();
const {WebSocketServer} = require('ws');


const port = app.listen(5000, ()=>{
    console.log('connected');
})
const wss = new WebSocketServer({port});

wss.on('connection', (ws) => { 
    console.log('New client connected'); 
    ws.on('message', (message) => { 
      console.log(`Received: ${message}`); 
      ws.send(`You sent: ${message}`); 
}); 
 ws.on('close', () => { 
    console.log('Client disconnected');

    }); 
});