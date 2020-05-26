const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  // your code here
  Attendee.find({}).exec((err, docs) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(docs);
    res.status(200).send(docs);
  });
};

exports.add = (req, res) => {
  // your code here
  let newAttendee = new Attendee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    shirt: req.body.shirt,
    skillLevel: req.body.skillLevel
  });

  // validate newAttendee.validate()
  // add email validation

  newAttendee.save((err, docs) => {
    if (err) {
      console.log(err);
      return;
    }
    res.sendStatus(200);
  });
};
