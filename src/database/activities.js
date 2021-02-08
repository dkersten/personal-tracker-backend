const {getDatabase} = require('./mongo');

const collectionName = 'activities';

async function insertActivity(activity) {
  const database = await getDatabase();
  const {insertedId} = await database.collection(collectionName).insertOne(activity);
  return insertedId;
}

async function getActivities() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

module.exports = {
    insertActivity,
    getActivities,
};