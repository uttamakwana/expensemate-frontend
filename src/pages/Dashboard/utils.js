export const getImageUrl = (client) => {
  let url;
  if (client?.avatar?.includes("googleusercontent")) {
    url = client.avatar;
  } else {
    url = `http://localhost:4000/${client.avatar}`;
  }
  return url;
};
