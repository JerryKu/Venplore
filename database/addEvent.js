const db = require('./index.js');

const addEvent = function(eventData) {
  db.collection('activities').insertOne({
    name: eventData.name
  }).then((results) => {
    return results;
  });
};

module.exports = addEvent;
