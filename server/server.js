const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const path = require('path');

const app = express();
const http = createServer(app);
const io = new Server(http, {});

io.on('connection', (socket) => {
  //We know websosckets are connected
  console.log('Connected');

  socket.on('disconnect', () => {
    console.log('user dcd');
  });

  //We will receive event lists form database
  socket.on('firstLoad', (message) => {
    console.log('from PostMan:', message);
    io.emit('createEvent', 'response form DS');
  });
});

http.listen(3000, () => {
  console.log('listening on 3000');
});
