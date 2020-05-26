const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  firstName: {
    type:String,
    required: true
  },
  lastName: {
    type:String,
    required: true
  },
  email: {
    type:String,
    unique: true,
    required: true
  },
  shirt: {
    type:String,
    enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    required: true
  },
  skillLevel: {
    type:String,
    enum: ['beginner', 'intermediate', 'expert'],
    required: true
  }

});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;