const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db');
const controllers = require('./controllers/attendee');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));


//const dontUseMe = () => throw new Error('implement controllers');

app.get('/attendees', (req, res) => {
  controllers.getAll(req,res);
});
app.post('/attendees', (req, res) => {
  controllers.add(req, res);
});
app.delete('/attendees', (req, res) => {
  controllers.delete(req, res);
});
app.put('/attendees', (req, res) => {
  controllers.update(req, res);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
