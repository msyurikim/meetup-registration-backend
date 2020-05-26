const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  // your code here
  Attendee.find( (err,data) => {
    if (err) {
      res.status(400).end();
    } else {
      res.send(data);
    }
  });
};

exports.add = (req, res) => {
  // your code here
  var data = req.body;
  Attendee.create( data, (err, attendee) => {
    if (err) {
      res.status(400).end();
    } else {
      res.send(`${data.firstName} has been posted`);
    }
  });
};
