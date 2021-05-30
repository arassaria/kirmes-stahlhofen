export async function getAdminData({ collectionName }) {
  const result = await fetch(`/api/admin/${collectionName}`);
  const returnedData = await result.json();
  return returnedData;
}

export async function getDJData({ collectionName }) {
  const result = await fetch(`/api/dj/${collectionName}`);
  const returnedData = await result.json();
  return returnedData;
}

export async function getStreamSource() {
  const result = await fetch("/api/admin/stream");
  const returnedData = await result.json();
  return returnedData;
}

export async function addData({ collectionName }, props) {
  await fetch(`api/user/${collectionName}`, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function updateStreamSource(streamSource) {
  await fetch("/api/admin/stream", {
    method: "PATCH",
    body: JSON.stringify(streamSource),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function updateData({ collectionName, id }, props) {
  await fetch(`/api/admin/${collectionName}?id=${id}`, {
    method: "PATCH",
    body: JSON.stringify(props),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function deleteData({ collectionName, id }) {
  await fetch(`/api/admin/${collectionName}?id=${id}`, {
    method: "DELETE",
  });
}
