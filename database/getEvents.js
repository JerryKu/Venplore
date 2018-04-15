const connection = require('./index.js');

const getEvent = (params, callback) => {
  connection.db.collection('activities').find({}).toArray()
  .then((results) => {
    callback(results);
  });
};

module.exports = getEvent;