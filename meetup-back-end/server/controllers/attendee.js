const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  Attendee.find((err, result) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(result);
    }
  });
};

exports.add = (req, res) => {
  const info = req.body;

  const newAttendee = new Attendee({
    firstName: info.firstName,
    lastName: info.lastName,
    email: info.email,
    shirt: info.shirt,
    skillLevel: info.skillLevel,
  })
  newAttendee.save(newAttendee, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  });
};
