const express = require("express");
const path = require("path");
const app = express();
const expressWs = require('express-ws')(app)

const PORT = 3000;


app.use("/public", express.static(path.join(__dirname, '../client/public')));
app.use("/assets", express.static(path.join(__dirname, '../client/assets')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.ws('/', function (ws, req) {
    ws.on('message', function (msg) {
        console.log(msg);
        ws.send('pong');
        var c = expressWs.getWss().clients;
        for (client of c ) {
            client.send("Hello!!");
        }
    });
});


app.listen(PORT, () => {console.log(`Server listening in port: ${PORT}...`)});

