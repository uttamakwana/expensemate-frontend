/* eslint-disable react/prop-types */
import FriendCard from "./FriendCard.jsx";

const Friends = ({ client, navigate }) => {
  if (client.friends.length === 0) {
    return (
      <div className="flex-col gap-8 py-1">
        <p className="text-center">No friends</p>
        <button
          className="btn bg-primary-400 text-white-900 fw-600 margin-inline-auto max-content"
          onClick={() => navigate("/users")}
        >
          Create Friends
        </button>
      </div>
    );
  }
  return (
    <main className="dashboard-friends responsive-grid py-1">
      {client.friends.map((friend) => (
        <FriendCard key={friend.friendId} friend={friend} />
      ))}
    </main>
  );
};

export default Friends;
