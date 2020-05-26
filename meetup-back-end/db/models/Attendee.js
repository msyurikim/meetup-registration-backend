const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  // your code here
  firstName: String,
  lastName: String,
  email: String,
  shirt: { type: String, enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
  skillLevel: { type: String, enum: ['beginner', 'intermediate', 'expert']}
});

// Should add email validation to the schema in the future
// regex to check for [text] + @ + text + '.' + [com|edu|org|more domain endings here...]

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;