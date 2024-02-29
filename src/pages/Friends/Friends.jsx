/* eslint-disable react/prop-types */
import FriendCard from "./FriendCard";
import "./friends.css";
import "../styles.css";

const Friends = ({ user }) => {
  const friends = user.friends;
  console.log(friends);
  return (
    <main className="friend-list card-grid | py-1">
      {friends.length > 0 ? (
        friends.map((friend) => {
          let btnClass;
          if (friend.amount > 0) {
            btnClass = "green";
          } else if (friend.amount < 0) {
            btnClass = "red";
          } else {
            btnClass = "";
          }
          return (
            <FriendCard
              key={friend.friendId}
              friend={friend}
              btnClass={btnClass}
            />
          );
        })
      ) : (
        <div className="flex-center p-1">
          <p className="text-center fw-600 text-danger">No friends found!</p>
          <button className="btn oval bg-primary-400 text-white-900 fs-button fw-600">
            Create Friends!
          </button>
        </div>
      )}
    </main>
  );
};

export default Friends;
