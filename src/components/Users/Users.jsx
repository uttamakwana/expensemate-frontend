/* eslint-disable react/prop-types */
import { useGetAllUsers } from "../../hooks/useGetAllUsers.js";
// import { getDisplayAllUsers } from "./utils.js";
import UserCard from "./UserCard.jsx";
import { SearchIcon } from "../../constants/icons.js";
import { useEffect, useRef, useState } from "react";

const Users = ({ client, navigate }) => {
  const [allUsers] = useGetAllUsers(client);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const searchRef = useRef(null);

  function handleSearchUsers() {
    const copyFilteredAllUsers = allUsers.filter((user) =>
      user.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
    );
    console.log(copyFilteredAllUsers);
    setFilteredUsers(copyFilteredAllUsers);
  }

  useEffect(() => {
    setFilteredUsers(allUsers);
  }, [allUsers]);

  if (allUsers.length === 0) {
    return (
      <div className="flex-col gap-8 py-1">
        <p className="text-center">No users found!</p>
        <button
          className="btn bg-primary-400 text-white-900 oval max-content margin-inline-auto"
          onClick={() => navigate("/dashboard")}
        >
          Home
        </button>
      </div>
    );
  }
  return (
    <main className="dashboard-users py-1">
      {/* Search Input */}
      <div className="dashboard-users-input-container mb-1">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for your users..."
            ref={searchRef}
            onChange={() => handleSearchUsers()}
          />
          <SearchIcon />
        </div>
      </div>
      {/* Display All Users */}
      {filteredUsers.length > 0 ? (
        <div className="users-cards">
          {filteredUsers.map((user) => (
            <UserCard key={user._id} user={user} client={client} />
          ))}
        </div>
      ) : (
        <p className="text-center">You have made all friends</p>
      )}
    </main>
  );
};

export default Users;
