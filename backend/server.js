const express = require("express");

const event = require("./file");

const dotenv = require("dotenv");

const server = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
    res.send(event);
})

server.listen(PORT, console.log("server is working and listening PORT ${PORT}"));