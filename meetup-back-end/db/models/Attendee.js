const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  // your code here
  firstName: String,
  lastName: String,
  email: String,
  shirt: {
    type: String,
    lowercase: true,
    trim:true,
    minlength: 1,
    maxlength: 3,
  },
  skillLevel: String
})

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;