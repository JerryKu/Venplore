const MongoClient = require('mongodb').MongoClient;
let pass = process.env.dbPass;
if (process.env.stage !== 'production') {
  let config = require('../config.js');
  pass = config.dbPass;
}

const uri =
`mongodb://master:${pass}@venplore-shard-00-00-tw68l.mongodb.net:27017,venplore-shard-00-01-tw68l.mongodb.net:27017,venplore-shard-00-02-tw68l.mongodb.net:27017/test?ssl=true&replicaSet=Venplore-shard-0&authSource=admin`;
let state = {

};
MongoClient.connect(uri, (err, client) => {
  if (err) { throw err; }
  state.db = client.db('venplore');
  console.log('Database Connection Open');
});

module.exports = state;

