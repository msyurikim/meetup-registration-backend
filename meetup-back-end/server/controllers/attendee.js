const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  Attendee.find({}, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.send(results);
    }
  })
};

exports.add = (req, res) => {
  console.log(req.body);
  Attendee.create(req.body, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.send(results);
    }
  });
};

exports.delete = (req,res) => {
  Attendee.deleteOne(req.body, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.send(results);
    }
  });
};

exports.update = (req,res) => {
  Attendee.replaceOne(req.body.filter, req.body.doc, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.send(results);
    }
  });
};
