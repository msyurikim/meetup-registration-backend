const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  Attendee.find({}, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500)
    } else {
      res.status(200).send(results);
    }
  })
};

exports.add = (req, res) => {
  let newAttendee = new Attendee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    shirt: req.body.shirt,
    skillLevel: req.body.skillLevel
  }).save((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }
  })
};
