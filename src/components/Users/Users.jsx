import { useSelector } from "react-redux";
import { getFilteredUsers, useGetAllUsers } from "./utils.js";
import UserCard from "./UserCard.jsx";

const Users = () => {
  const allUsers = useGetAllUsers();
  const { client } = useSelector((state) => state.userReducer);
  const filteredUsers = getFilteredUsers(allUsers, client);
  console.log(filteredUsers);
  if (filteredUsers.length === 0) {
    return (
      <p className="text-center p-1 bg-white-900 text-black-700">
        You have all friends!
      </p>
    );
  }

  return (
    <main className="dashboard-users users-grid responsive-grid">
      {filteredUsers &&
        filteredUsers.map((user) => <UserCard key={user._id} user={user} />)}
    </main>
  );
};

export default Users;
