'use strict';

const {MongoClient} = require(`mongodb`);

const DB_HOST = `localhost:27017`;

const url = `mongodb://${DB_HOST}`;

module.exports = MongoClient.connect(url).then((client) => client.db(`test`)).catch((e) => {
  console.log(`Failed to connect to MongoDB`, e);
  process.exit(1);
});
