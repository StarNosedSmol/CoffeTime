const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
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

eventsInstance.allEvents
  .then(data => {
    io.on('connection', (socket) => {
      // We know websosckets are connected
      console.log('Server connected ' + socket.id);

      socket.on('disconnect', () => {
        console.log('disconnected')
      })




      // When connected, fetch the events
      // and send them to the frontend

      socket.on('loadEvents', () => {
        console.log('recieved loadEvents');
        console.log(data, 'sending to fe');
        io.emit('loadEvents', data);
      });


      // listen to action 'newEvent',
      // once receive event from client, store it in databasa
      socket.on('newEvent', async (event) => {
        //create new event in database
        const newEvent = eventsInstance.newEvent({ ...template, event });
        io.emit('loadEvents', [newEvent]);
      });
    });
  })


http.listen(3000, () => {
  console.log('listening on 3000');
});
