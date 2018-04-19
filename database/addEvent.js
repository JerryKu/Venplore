const connection = require('./index.js');

const addEvent = (eventData, callback) => {
  connection.db.collection('activities').insertOne({
    eventInfo: {
      name: eventData.activityName,
      imageLink: eventData.imageLink,
      description: eventData.description,
    },
    eventRatings: {
      overallEnjoyability: Number(eventData.overallEnjoyability),
      cost: Number(eventData.cost),
      mentalEffort: Number(eventData.mentalEffort),
      physicalEffort: Number(eventData.physicalEffort),
      natureLevel: Number(eventData.natureLevel),
      socialLevel: Number(eventData.socialLevel),
      duration: Number(eventData.duration),
    },
  }).then((results) => {
    callback(results);
  });
};

module.exports = addEvent;
