const { ObjectId } = require("mongodb");
const { collection } = require("./database");

async function getAdminView({ collectionName }) {
  const cursor = collection(collectionName).find({
    status: "0",
  });
  return await cursor.toArray();
}

async function getDJView({ collectionName }) {
  const cursor = collection(collectionName).find({
    status: "1",
  });
  return await cursor.toArray();
}

async function insertData({ collectionName, data }) {
  return await collection(collectionName).insertOne(data);
}

async function deleteData({ collectionName, id }) {
  await collection(collectionName).deleteOne({ _id: ObjectId(id) });
}

async function updateData({ collectionName, id, data }) {
  await collection(collectionName).updateOne(
    { _id: ObjectId(id) },
    { $set: data }
  );
}

exports.getAdminView = getAdminView;
exports.getDJView = getDJView;
exports.insertData = insertData;
exports.deleteData = deleteData;
exports.updateData = updateData;
