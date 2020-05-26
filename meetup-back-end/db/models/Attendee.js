const mongoose = require('mongoose');

//TODO: Note: think about what types of constraints or validation these fields would benefit from

const attendeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  shirt: String,
  skillLevel: String
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;