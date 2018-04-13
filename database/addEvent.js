const connection = require('./index.js');

const addEvent = (eventData) => {
  connection.db.collection('activities').insertOne({
    name: eventData.activityName,
    imageLink: eventData.imageLink,
    overallEnjoyability: Number(eventData.overallEnjoyability),
    cost: Number(eventData.cost),
    mentalEffort: Number(eventData.mentalEffort),
    physicalEffort: Number(eventData.physicalEffort),
    natureLevel: Number(eventData.natureLevel),
    socialLevel: Number(eventData.socialLevel),
    duration: Number(eventData.duration),
    description: eventData.description,
  }).then((results) => {
    return results;
  });
};

module.exports = addEvent;
