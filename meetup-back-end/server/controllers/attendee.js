const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  // your code here
  Attendee.find({}, (err, data) => {
    if (err) {
      res.status(404).json(data)
    } else {
      res.status(200).json(data)
    }
  })
};

exports.add = (req, res) => {
  // your code here
  const newAttendee = new Attendee(req.query)
  newAttendee.save((err, data) => {
    if (err) {
      res.status(404).json(data)
    } else {
      res.status(200).json(data)
    }
  })
};
