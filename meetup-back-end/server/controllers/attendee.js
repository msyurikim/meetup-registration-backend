const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  // your code here
  Attendee.find({}).exec((err, data) => {
    if (err) {
      return res.status(400).send({
        message: err,
      });
    }
    return res.status(200).send(data);
  })
};

exports.add = (req, res) => {
  // your code here
  Attendee.save((err, attendee) => {
    if (err) {
      return res.status(400).send({
        message: err,
      });
    }
    return res.status(200);
  })
};
