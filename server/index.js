var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');

var app = express();

app.listen(3000, function() {
  console.log('listening on port 3000!');
});