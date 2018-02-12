const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(bodyParser.json());

app.listen(port, () => {
  console.log('listening on port', port);
});
