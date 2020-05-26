const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/jsmeetup';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

const Attendee = require('./models/Attendee.js');

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

db.getAll = (query, cb) => {
  Attendee.find({}, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results);
    }
  });
};

db.createOne = (query, cb) => {
  const {firstName, lastName, email, shirt, skillLevel} = query;

  Attendee.create({firstName, lastName, email, shirt, skillLevel}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  })
};

module.exports = db;