const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db');
const { add, getAll, update, remove } = require('./controllers/Attendee.js')

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));


//const dontUseMe = () => throw new Error('implement controllers');

app.get('/attendees', getAll);
app.post('/attendees', add);
app.put('/attendees/:id', update);
app.delete('/attendees/:id', remove);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
