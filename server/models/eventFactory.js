const mongoose = require('mongoose');

const EventSchema = require('./eventModel');
const Event = mongoose.model('Event', EventSchema);

/**
 *
 *
 * @class EventMachine
 *
 * @get allEvents
 * @get numberOfEvents
 * @method getEventByIndex(index)
 * @method newEvent({Event})
 */

class EventMachine {
  constructor() {
    this.events = [];
    this.quantity = 0;
    this.#initiate();
  }

  // Return the data
  // for the frontend to consume
  get allEvents() {
    return this.events;
  }

  get numberOfEvents() {
    return this.quantity;
  }

  getEventByIndex(index) {
    return this.events[index];
  }

  // Setting up a new Event
  newEvent({ host, created, details }) {
    // Making sure we get the proper data
    if (
      typeof host != 'string' ||
      typeof details.title != 'string' ||
      !details.date instanceof Date ||
      !created instanceof Date
    ) {
      throw new Error('Input the proper data');
    }

    // Set the contructor with
    // the inputer data
    const newEvent = {
      host,
      created,
      details,
    };

    this.#addEventToDB(newEvent);
    return newEvent;
  }

  ////////////////////////////////////////////////
  // Private Methods
  ////////////////////////////////////////////////

  // Printing all the events from the DB
  #initiate() {
    // If we already fetched the data
    // we just return all the events
    if (this.events.length != 0) return;

    // If not, we fetch the data
    async function fetchingData(events) {
      const allEvents = await Event.find({});
      events.push(...allEvents);
    }

    fetchingData(this.events);
    this.quantity = this.events.length;
  }

  // Setting up asynchronusly
  // the new event to the database
  async #addEventToDB(event) {
    const eventFromDB = await Event.create(event);
    this.events.push(this.quantity);
    this.quantity++;
  }
}

module.exports = EventMachine;
