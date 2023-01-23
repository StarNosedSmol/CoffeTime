const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const path = require('path');

const app = express();
const http = createServer(app);
const io = new Server(http, {});

const eventData = [{
  host: 'Garrett Yan',
  created: new Date(),
  details: {
    title: 'Chinese New Year dinner for you all!',
    date: new Date(),
  }
}, {
    host: 'Ari',
    created: new Date(),
    details: {
      title: 'Chinese New Year dinner for you all!',
      date: new Date(),
    }
  },
  {
    host: 'Nate',
    created: new Date(),
    details: {
      title: 'Chinese New Year dinner for you all!',
      date: new Date(),
    }
  }];

io.on('connection', (socket) => {
  //We know websosckets are connected
  console.log('Server connected' + socket.id);

  socket.on('disconnect', () => {
    console.log('disconnected')
  })

  //We will receive event lists form database
  socket.on('loadEvents', (message) => {
    console.log('from PostMan:', message);
    io.emit('loadEvents', eventData);
  });

  //listen to action 'newEvent', once receive event from client, store it in databasa
  socket.on('newEvent', (e) => {
    //see what event is passed in
    console.log(e);
    //create new event in database
    //send back updated events from database to client with action 'loadEvents'
    io.emit('loadEvents', [e]);
  });
});

http.listen(3000, () => {
  console.log('listening on 3000');
});
