const MongoClient = require("mongodb").MongoClient;
const config = require('../config.js');

const uri =
`mongodb://master:${config.dbPass}@venplore-shard-00-00-tw68l.mongodb.net:27017,venplore-shard-00-01-tw68l.mongodb.net:27017,venplore-shard-00-02-tw68l.mongodb.net:27017/test?ssl=true&replicaSet=Venplore-shard-0&authSource=admin`;


const db = MongoClient.connect(uri, (err) => {
  if(err) throw err;
  console.log('connection opened');
});

module.exports = db;
