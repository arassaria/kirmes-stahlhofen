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

export async function validateUser({ username, password }) {
  const result = await fetch(`/api/user/login`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await result.json();
  return data;
}

export async function getLoginToken({ username }) {
  const result = await fetch(`/api/user/token`, {
    method: "POST",
    body: JSON.stringify({ username }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await result.json();
  return data.token;
}

export async function getUserRights({ token }) {
  const result = await fetch(`/api/user/rank`, {
    method: "POST",
    body: JSON.stringify({ token }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await result.json();
  if (data !== null) {
    return data.rank;
  } else {
    return null;
  }
}

export async function registerNewUser({ username, password }) {
  await fetch("/api/user/register", {
    method: "POST",
    body: JSON.stringify({ username, password, rank: "0" }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function checkAvailability({ username }) {
  const result = await fetch("/api/user/checkUsername", {
    method: "POST",
    body: JSON.stringify({ username }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const available = await result.json();
  return available;
}
