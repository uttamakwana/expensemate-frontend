export const getImageUrl = (client) => {
  let url;
  if (client?.avatar?.includes("googleusercontent")) {
    url = client.avatar;
  } else {
    url = `https://splitwise-backend-k48h.onrender.com/${client.avatar}`;
  }
  return url;
};
