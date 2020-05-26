const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  shirt: {
    type: String,
    required: true
  },
  skillLevel: {
    type: String,
    required: true
  },
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;