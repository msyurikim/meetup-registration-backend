const Attendee = require('../../db/models/Attendee');
const path = require('path');

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

exports.update = (req, res) => {
  const id = path.basename(req.url);
  Attendee.updateOne({_id: id}, req.body)
    .then(() => {
      res.status(201)
      res.end()
    })
    .catch(err => {
      res.status(400)
      res.end()
    });
}

exports.remove = (req, res) => {
  const id = path.basename(req.url);
  Attendee.deleteOne({_id: id})
    .then(() => {
      res.status(200)
      res.end()
    })
    .catch(err => {
      res.status(400)
      res.end()
    })
}