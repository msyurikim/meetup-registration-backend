const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db');
const routes = require('./controllers/attendee.js')

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));


// const dontUseMe = () => throw new Error('implement controllers');

app.get('/attendees', routes.getAll);

app.post('/attendees', routes.add);

// app.put('/attendees', routes.changeInfo);

app.delete('/attendees', routes.removeAttendee);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
