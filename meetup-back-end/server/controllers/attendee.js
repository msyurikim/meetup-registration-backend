const mongoose = require('mongoose');
const Attendee = require('../../db/models/Attendee');


exports.getAll = (req, callback) => {
  // your code here
  Attendee.find({}, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(err, result);
    }
  })
};

exports.add = (req, callback) => {
  // your code here
  const newAttendee  = new Attendee(req.body);
  newAttendee.save(req, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(err, result);
    }
  })
};
