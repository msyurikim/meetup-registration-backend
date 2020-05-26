const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  // your code here
  Attendee.find({}, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.add = (req, res) => {
  const { firstName, lastName, email, shirt, skillLevel } = req.body;

  const newAttendee = new Attendee({ firstName, lastName, email, shirt, skillLevel });

  newAttendee.save((err, attendee) => {
    if (err) {
      return err;
    } else {
      console.log('saved!');
    }
  })
};
