const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const path = require('path');

const app = express();
const http = createServer(app);
const io = new Server(http, {});

io.on('connection', (socket) => {
  //We know websosckets are connected
  console.log('Server connected' + socket.id);

  //We will receive event lists form database
  socket.on('loadEvents', (message) => {
    console.log('from PostMan:', message);
    io.emit('createEvent', 'response form DS');
  });

  //listen to action 'newEvent', once receive event from client, store it in databasa
  socket.on('newEvent', (e) => {
    //see what event is passed in
    console.log(e);
    //create new event in database
    database.set(e);
    //send back updated events from database to client with action 'loadEvents'
    io.emit('loadEvent', 'response from DS');
  });
});

http.listen(3000, () => {
  console.log('listening on 3000');
});
