const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const path = require('path');
const EventMachine = require('../server/models/eventFactory');

const app = express();
const http = createServer(app);
const io = new Server(http, {});

const eventsInstance = new EventMachine();

// We may want to remove
// if we want to trigger an error
const template = {
  host: 'Nobody',
  created: new Date(),
  details: {
    title: 'There is no description for your event.',
  },
};

io.on('connection', async (socket) => {
  // We know websosckets are connected
  console.log('Server connected' + socket.id);

  // When connected, fetch the events
  // and send them to the frontend
  const allEvents = await eventsInstance.allEvents;
  io.emit('loadEvents', allEvents);

  // listen to action 'newEvent',
  // once receive event from client, store it in databasa
  socket.on('newEvent', async (event) => {
    //create new event in database
    const newEvent = eventsInstance.newEvent({ ...template, event });
    io.emit('loadEvents', newEvent);
  });
});

http.listen(3000, () => {
  console.log('listening on 3000');
});
