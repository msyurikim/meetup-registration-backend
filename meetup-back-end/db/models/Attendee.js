const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  shirt: {
    type: String,
    enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  skillLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'expert'],
  },
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;