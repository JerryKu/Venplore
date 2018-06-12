const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const path = require('path');
var passport = require('passport');
const addEvent = require('../database/addEvent.js');
const getEvents = require('../database/getEvents.js');
var session = require('express-session');

const app = express();
const port = process.env.PORT || 8080;

require('../config/passport')(passport); // pass passport for configuration

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({ secret: 'venploreroxx', resave: false, saveUninitialized: false  }));
app.use(passport.initialize());
app.use(passport.session());

require('./routes.js')(app, passport);

app.post('/event/creation', (request, response) => {
  addEvent(request.body, (results) => {
    response.send(results);
  });
});

app.get('/event/finding', (request, response) => {
  getEvents('params', (results) => {
    response.send(results);
  });
});

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "/../client/dist/index.html"));
});

const server = app.listen(port, (err) => {
  if(err) throw err;
  console.log('listening on port', port);
});

module.exports = server;
