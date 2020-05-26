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
  db.getAll((err, data) => {
    if (err) {
      res.sendStatus(404);
      throw err;
    }
    else res.status(200).json(data);
  })
});
app.post('/attendees', (req, res) => {
  db.addOne(req.body, (err) => {
    if (err) {
      res.status(400).json(err.errors.message);
    }
    else res.sendStatus(200);
  })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
