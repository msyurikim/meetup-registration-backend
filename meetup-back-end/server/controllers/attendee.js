const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  // your code here
  Attendee.find()
    .then(attendees => {
      res.status(200)
      res.send(attendees)
      res.end()
    })
    .catch(err => {
      res.status(400)
      res.end()
    });
};

exports.add = (req, res) => {
  // your code here
  let attendee = new Attendee(req.body);
  attendee.save(err => {
    if (err) {
      res.status(400)
      res.end()
    }
    res.status(201)
    res.end();
  })
};
