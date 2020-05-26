const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  // your code here
  Attendee.find({}, (err, data) => {
    if (err) return console.log('Error getting Attendees!');
    res.send(data);
  });
};

exports.add = (req, res) => {
  // your code here
  Attendee.create(req.body, err => {
    if (err) return console.log('Error adding Attendees!');
    console.log('Attendee Created!');
  });
};
