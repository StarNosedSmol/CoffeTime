const EventMachine = require('./models/eventFactory');

const eventData = {
  host: 'People',
  created: new Date(),
  details: { title: 'New Event', date: new Date() },
};

const eventInstance = new EventMachine();
eventInstance.set(eventData);
