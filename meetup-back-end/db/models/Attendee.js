const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  shirt: {
    type: String,
  },
  skillLevel: {
    type: String,
  },
});

const Attendee = mongoose.model('Attendee', attendeeSchema);




module.exports = Attendee;