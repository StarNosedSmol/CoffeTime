const EventMachine = require('./models/eventFactory');

const eventData = {
  host: 'Garrett Yan',
  created: new Date(),
  details: {
    title: 'Chinese New Year dinner for you all!',
    date: new Date(),
  },
};

const eventsInstance = new EventMachine(); // Connect the database

// eventsInstance.getEventNumber(/* _id Number */); // Read one event

setTimeout(() => {
  const allEvent = eventsInstance.allEvents; // Fetch all the events
  const secondEvent = eventsInstance.getEventByIndex(2); // Fetch all the events
  const newEvent = eventsInstance.newEvent(eventData); // Add an event

  console.log('Second Event: ');
  console.log(secondEvent);
  console.log('New Event: ');
  console.log(newEvent);
  console.log(eventsInstance.numberOfEvents);
}, 2000);
