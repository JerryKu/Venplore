const db = require('./index.js');

const addEvent = (eventData) => {
  db.collection('activities').insertOne({
    name: eventData.name,
  }).then((results) => {
    return results;
  });
};

module.exports = addEvent;
