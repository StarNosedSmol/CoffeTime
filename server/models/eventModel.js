const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const EventSchema = new mongoose.Schema({
  host: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    required: true,
  },
  eventTime: { type: String},
  details: {
    title: { type: String, required: true },
    // date: { type: Date, required: true },
    description: String,
    attendees: Array,
  },
});

const Event = mongoose.model('Event', EventSchema);


main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    'mongodb+srv://georgevaz:Trashtalk123@1gurjts.mongodb.net/?retryWrites=true&w=majority'
  );
}

module.exports = Event;
