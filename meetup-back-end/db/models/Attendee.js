const mongoose = require('mongoose');

//TODO: Note: think about what types of constraints or validation these fields would benefit from
//https://mongoosejs.com/docs/validation.html
//Strings have enum, match, minlength, and maxlength validators.

const attendeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  shirt: { type: String, enum: ["XS", "S", "M", "L", "XL", "XXL"] },
  skillLevel: { type: String, enum: ["beginner", "intermediate", "expert"] }
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;