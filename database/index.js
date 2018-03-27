const MongoClient = require('mongodb').MongoClient;
const config = require('../config.js');

const uri =
`mongodb://master:${config.dbPass}@venplore-shard-00-00-tw68l.mongodb.net:27017,venplore-shard-00-01-tw68l.mongodb.net:27017,venplore-shard-00-02-tw68l.mongodb.net:27017/test?ssl=true&replicaSet=Venplore-shard-0&authSource=admin`;
let db = null;

MongoClient.connect(uri, (err, client) => {
  if (err) {
    throw err;
  } else {
    db = client.db('activities');
    console.log('Database Connection Open');
    db.collection('activities').insertOne({
  name: 'fishing',
}).then((results) => {
  console.log(results);
});
  }
});



module.exports = db;
