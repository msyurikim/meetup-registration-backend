const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  Attendee.find({}, (err, results)=>{
    err ? res.status(500).send("Error retrieving attendees from database.") : res.status(200).send(results);
  })
};

exports.add = (req, res) => {
  const attendee = new Attendee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    shirt: req.body.shirt,
    skillLevel: req.body.skillLevel
  });

  attendee.save((err, results)=>{
    err ? res.status(500).send("Error saving to database.") : res.status(200).send(results);
  })
};
