const {getDatabase} = require('./mongo');
const {ObjectID} = require('mongodb');


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

async function deleteActivity(id) {
    const database = await getDatabase();
    await database.collection(collectionName).deleteOne({
      _id: new ObjectID(id),
    });
  }

  async function updateActivity(id, activity) {
    const database = await getDatabase();
    delete activity._id;
    await database.collection(collectionName).update(
      { _id: new ObjectID(id), },
      {
        $set: {
          ...activity,
        },
      },
    );
  }

module.exports = {
    insertActivity,
    getActivities,
    deleteActivity,
    updateActivity,
};