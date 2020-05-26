const Attendee = require('../../db/models/Attendee');

exports.getAll = (req, res) => {
  // your code here
  Attendee.find({},(err,data) => {
    if(err){
      res.status(500);
    } else {
      res.send(data);
      res.status(200);
    }
  })
};

exports.add = (req, res) => {
  // your code here
  const attendee = new Attendee(req.body);

  attendee.save((err) => {
    if(err) {
      res.status(500);
      res.end();
    } else {
      res.send(201);
      res.end();
    }
  });
};
