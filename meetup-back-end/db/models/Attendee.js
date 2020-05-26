const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  // your code here
  firstName: STRING,
  lastName: STRING,
  email: STRING,
  shirt: {
    type: STRING,
    enum: [`XS`, `S`, `M`, `L`, `XL`, `XXL`]
  },
  skillLevel: {
    type: STRING,
    enum: [`beginner`, `intermediate`, `expert`]
  },,
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;