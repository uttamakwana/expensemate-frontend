export const getDisplayAllUsers = (allUsers, client) => {
  const clientId = client._id;
  const filteredUsers = allUsers
    .map((user) => {
      const findInFriends = client.friends.find((f) => f.friendId === user._id);
      const findInFriendRequests = user.friendRequests.find(
        (f) => f.userId === clientId
      );
      if (findInFriendRequests) {
        return { ...user, alreadySent: true };
      }
      if (user._id !== clientId && !findInFriends) return user;
      return null; // returning null for users that don't match the conditions
    })
    .filter((user) => user !== null); // filtering out null values
  return filteredUsers;
};
