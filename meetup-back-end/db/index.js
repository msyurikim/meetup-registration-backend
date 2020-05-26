const mongoose = require('mongoose');
const Attendee = require('./models/Attendee');

const mongoURI = 'mongodb://localhost:27017/jsmeetup';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

const getAll = (cb) => {
  Attendee.find().exec((err, docs) => {
    cb(err, docs);
  });
}

const addOne = (data, cb) => {
  let attendee = new Attendee(data);
  attendee.save((err) => {
    cb(err);
  });
}

module.exports = { db, getAll, addOne };