const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db');
const attendee = require('./controllers/attendee.js');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/attendees', attendee.getAll);
app.post('/attendees', attendee.add);
app.put('/attendees', attendee.update);
app.delete('/attendees', attendee.delete);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
