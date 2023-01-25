const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const Event = require('./models/eventModel')
const User = require('./models/userModel')

const app = express();
const http = createServer(app);
const io = new Server(http, {});

let initLoad;

io.on('connection', (socket) => {
  // We know websosckets are connected
  console.log('Server connected, websocket ID: ' + socket.id);
  socket.on('disconnect', () => {
    console.log('disconnected')
  })
  // When connected, fetch the events
  // and send them to the frontend

  socket.on('initialLoad', () => {
    Event.find({})
      .then(data => {
        initLoad = data;
        console.log('initLoad: ', initLoad);
        io.emit('initialLoad', data);
      })
  });
  // listen to action 'newEvent',
  // once receive event from client, store it in databasa
  socket.on('newEvent', (newEvent) => {
    console.log('incoming event is: ', newEvent)
    //create new event in database
    Event.create(newEvent)
      .then(data => {
        console.log('new Event is: ', newEvent)
        io.emit('loadEvents', [newEvent]);
      })
  });
});


http.listen(3000, () => {
  console.log('listening on 3000');
});
