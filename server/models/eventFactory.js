const mongoose = require('mongoose');

const EventSchema = require('./eventModel');
const Event = mongoose.model('Event', EventSchema);

////////////////////////////////////////////////
// Event Factory
////////////////////////////////////////////////

class EventMachine {
  set({ host, created, details }) {
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

    this.host = host;
    this.created = created;
    this.details = details;

    // Create a new event Atlas
    Event.create(this).then((data) => console.log(data));
  }

  getDetails() {
    return {
      host: this.host,
      created: this.created,
      host: this.details,
    };
  }
}

module.exports = EventMachine;
