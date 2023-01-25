const express = require('express');
const app = express();
const cors = require("cors");
const corsConfigs = require("./configs/corsConfigs");
const allowedOrigins = require("./configs/allowedOrigins");
app.use(cors(corsConfigs));
app.use(express.json());
const port = 3000;

const { createServer } = require('http');
const http = createServer(app);
const { Server } = require('socket.io');
const io = new Server(http, {cors: { origin: allowedOrigins }});
const socketLogic = require("./socketio.js");
socketLogic(io);

const mongoose = require("mongoose");
const dbConnect =  require('./configs/dbConfig')

dbConnect();
// we could add error handling here
mongoose.connection.once("open", () => {
  http.listen(port, () => {
    console.log(`Connected to DB, app on ${port}`);
  });
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});
