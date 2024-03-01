/* eslint-disable react/prop-types */
import "./friends.css";
import "../styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FriendCard from "./FriendCard.jsx";

const Friends = () => {
  const { client } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  if (client.friends.length === 0) {
    return (
      <div className="flex-col gap-1">
        <p>No friends yet! Create friends!</p>;
        <button onClick={navigate("/dashboard/users")}>Create friends!</button>
      </div>
    );
  }

  return (
    <div className="dashboard-friends-grid friends-grid responsive-grid">
      {client.friends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default Friends;
