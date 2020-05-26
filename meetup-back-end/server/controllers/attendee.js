const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  Attendee.find((err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200);
      res.send(JSON.stringify(docs));
    }
  })
};

exports.add = (req, res) => {
  const { firstName, lastName, email, shirt, skillLevel } = req.body;
  const attendee = new Attendee({ firstName, lastName, email, shirt, skillLevel });
  attendee.save(function (err, result) {
    if (err) console.log(err);
    res.status(201);
    res.send(JSON.stringify(result));
  });
};
