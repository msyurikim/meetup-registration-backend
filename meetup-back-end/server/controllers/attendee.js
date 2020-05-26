const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  // your code here
};

exports.add = (req, res) => {
  const { firstName, lastName, email, shirt, skillLevel } = req.body;
  const attendee = new Attendee({ firstName, lastName, email, shirt, skillLevel });
  attendee.save();
};
