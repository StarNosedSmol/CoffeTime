const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const path = require('path');

const app = express();
const http = createServer(app);
const io = new Server(http, {});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user dcd');
  });
});

io.on('firstLoad', (message) => {
  console.log('from PostMan:', message);
  socket.emit('Send back from Server');
});

io.emit('createEvent', (allEvents) => {});

http.listen(3000, () => {
  console.log('listening on 3000');
  console.log('listening on 3000');
});
