const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js')
const addEvent = require()

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());


app.get('/event', (request, response) => {


});

const server = app.listen(port, (err) => {
  if(err) throw err;
  console.log('listening on port', port);
});

module.exports = server;
