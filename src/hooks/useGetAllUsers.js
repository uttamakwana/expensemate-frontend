import { useEffect, useState } from "react";
import { server } from "../api/api";
import { getDisplayAllUsers } from "../components/Users/utils";

export const useGetAllUsers = (client) => {
  const [allUsers, setAllUsers] = useState([]);
  // get users
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await server.get("/user/all");
        const displayUsers = getDisplayAllUsers(
          response.data.data.users,
          client
        );
        setAllUsers(displayUsers);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, [client]);

  return [allUsers, setAllUsers];
};
