const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  // your code here
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  email: String,
  shirt: {
    type: String,
    enum: ['XS', 'S', 'M', 'L', 'XL']
  },
  skillLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'expert']
  }
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;