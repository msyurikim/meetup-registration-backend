const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String, 
  email: {
    type: String,
    unique: true
  }, 
  shirt: String,
  skillLevel: String
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;