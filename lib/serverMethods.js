async function getCollection({ collectionName }) {
  const cursor = collection(collectionName).find({});
  return await cursor.toArray();
}

exports.getCollection = getCollection;
