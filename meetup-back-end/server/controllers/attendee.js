const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  Attendee.find({}, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Something went wrong!');
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });

};

exports.add = (req, res) => {
  Attendee.create(req.body, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating new attendee.');
    } else {
      console.log(data);
      res.status(201).send(data);
    }
  });
};
