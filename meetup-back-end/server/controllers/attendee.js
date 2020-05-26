const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  Attendee.find()
    .then(data => {
      res.send(data);
    }
    )
};

exports.add = (req, res) => {
  let attendee = [req.body];
  Attendee.insertMany(attendee)
    .then(docs => {
      res.send("Added an attendee!");
    })
    .catch(err => {
      res.send(err);
    });
};
