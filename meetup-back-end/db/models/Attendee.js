const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  shirt: String,
  skillLevel: String
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;