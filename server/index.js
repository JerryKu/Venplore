const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');
const addEvent = require('../database/addEvent.js');
const getEvents = require('../database/getEvents.js');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());

app.post('/event/creation', (request, responce) => {
  addEvent(request.body);
})

app.get('/event/finding', (request, response) => {
  getEvents('params', (results) => {
    response.send(results);
  });
});

const server = app.listen(port, (err) => {
  if(err) throw err;
  console.log('listening on port', port);
});

module.exports = server;
