import { server } from "../../api/api.js";
import { useState, useEffect } from "react";

export function useGetAllUsers() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await server.get("/user/all");
      setAllUsers(response.data.data.users);
    };
    getAllUsers();
  }, []);

  return allUsers;
}

export function getFilteredUsers(allUsers, client) {
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
}
