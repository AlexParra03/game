const express = require("express");
const path = require("path");
const app = express();
const http = require('http');
const WebSocket = require("ws");

const server = http.createServer(app);

const PORT = 3000;

const wss = new WebSocket.Server({server});

wss.on('open', function open() {
  ws.send('something');
  console.log("Socket connected");
});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('something');
});


app.use("/public", express.static(path.join(__dirname, '../client/public')));
app.use("/assets", express.static(path.join(__dirname, '../client/assets')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});


server.listen(PORT, () => {console.log(`Server listening in port: ${PORT}...`)});
