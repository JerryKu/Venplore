const connection = require('./index.js');

const addEvent = (eventData) => {
  connection.db.collection('activities').insertOne({
    name: eventData.name,
    imageLink: eventData.imageLink,
    overallEnjoyability: eventData.overallEnjoyability,
    cost: eventData.cost,
    mentalEffort: eventData.mentalEffort,
    physicalEffort: eventData.physicalEffort,
    natureLevel: eventData.natureLevel,
    socialLevel: eventData.socialLevel,
    duration: eventData.duration,
    description: eventData.description,
  }).then((results) => {
    return results;
  });
};

module.exports = addEvent;
