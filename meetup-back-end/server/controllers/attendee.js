const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  // your code here

  console.log('getAll() started');
  Attendee.find({}, (err, attendees) => {
      if (err) {
        console.log(err);
        res.send(400)
      } else {
        res.send(attendees);
      }
  });


};

exports.add = (req, res) => {
  // your code here
  var newAttendee = new Attendee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    shirt: req.body.shirt,
    skillLevel: req.body.skillLevel
  }).save((err, result) => {
    if (err) {
      console.log(err);
      res.send(400);
    } else {
      res.send(result);
    }
  })
};
