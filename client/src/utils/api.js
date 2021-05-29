export async function getAdminData({ collectionName }) {
  const result = await fetch(`/api/admin/${collectionName}`);
  const returnedData = await result.json();
  return returnedData;
}
