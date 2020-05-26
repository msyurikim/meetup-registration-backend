const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/jsmeetup';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

// const AttendeeSchema = new mongoose.Schema({
//   id: Number,
//   firstName: String,
//   lastName: String,
//   email: String,
//   shirt: [String],
//   skillLevel: [String]
// });

// const Attendee = mongoose.model('Attendee', AttendeeSchema);




module.exports = db;