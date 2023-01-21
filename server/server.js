const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const path = require('path');

const app = express();
const http = createServer(app);
const io = new Server(http, {});


io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('user dcd')
  })

  socket.on('frontendMessage', (message) => {
    console.log('recieved message from FE:', message);
    socket.emit('banana', 'You clicked me!');

  })


})

http.listen(3000, () => {
  console.log('listening on 3000')
});
