const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db');
const queries = require('./controllers/attendee.js')

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));


// const dontUseMe = () => throw new Error('implement controllers');

app.get('/attendees', (req, res) => {
  queries.getAll(req, res)
});

app.post('/attendees', (req, res) => {
  queries.add(req, res)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
