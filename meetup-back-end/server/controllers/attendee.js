const Attendee = require('../../db/models/Attendee');


exports.getAll = (req, res) => {
  // your code here
  Attendee.find({}, (err, result) => {
    if (err) {
      res.send(500);
    } else {
      res.status(200).send(result);
    }
  })
};

exports.add = (req, res) => {
  // your code here
  const newAttendee  = new Attendee(req.body);
  newAttendee.save(req.body, (err, result) => {
    if (err) {
      res.send(500);
    } else {
      res.status(200).send(result);
    }
  })
};
