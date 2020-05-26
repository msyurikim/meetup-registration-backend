const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  Attendee.find({}, (err, data) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      res.status(200).send(data);
    }
  });

};

exports.add = (req, res) => {
  Attendee.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send('Error creating new attendee.');
    } else {
      res.status(201).send(data);
    }
  });
};

exports.update = (req, res) => {
  const _id = req.body._id;
  Attendee.updateOne({ _id }, req.body, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating new attendee.');
    } else {
      console.log(data);
      res.status(201).send(data);
    }
  });
};

exports.delete = (req, res) => {
  const _id = req.body._id;
  Attendee.deleteOne({ _id }, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting attendee.');
    } else {
      console.log(data);
      res.status(200).end();
    }
  });
};
