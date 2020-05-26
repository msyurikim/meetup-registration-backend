const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  firstName: {type: String, required: [true, 'Please enter first name.']},
  lastName: {type: String, required: [true, 'Please enter last name.']},
  email: {type: String, required: [true, 'Please enter your email address'], unique: [true, 'Email address already exists.']},
  shirt: {type: String, enum: [`XS`, `S`, `M`, `L`, `XL`, `XXL`], required: [true, 'Please enter your t-shirt size.']},
  skillLevel: {type: String, enum: [`beginner`, `intermediate`, `expert`], required: [true, 'Please enter your skill level.']}
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;