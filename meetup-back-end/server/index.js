const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));


// const dontUseMe = () => throw new Error('implement controllers');

app.get('/attendees', (req, res) => {
  db.getAll({}, (err, results) => {
    if (err) {
      console.error('A database error occured');
    } else {
      res.send(results);
    }
  })
});

app.post('/attendees', (req, res) => {
  const {firstName, lastName, email, shirt, skillLevel} = req.body;
  db.createOne({firstName, lastName, email, shirt, skillLevel}, (err, results) => {
    if (err) {
      console.error('A database error occured');
    } else {
      res.send(results);
    }
  })
});

app.delete('/attendees', (req, res) => {
  const {email} = req.body;
  db.deleteOne({email}, (err, results) => {
    if (err) {
      console.error('A database error occured');
    } else {
      res.send(results);
    }
  })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
