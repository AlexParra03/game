const express = require("express");
const path = require("path");
const app = express();
const http = require('http');

const server = http.createServer(app);

const PORT = 3000;


app.use("/public", express.static(path.join(__dirname, '../client/public')));
app.use("/assets", express.static(path.join(__dirname, '../client/assets')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});


server.listen(PORT, () => {console.log(`Server listening in port: ${PORT}...`)});
