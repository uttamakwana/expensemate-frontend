/* eslint-disable react/prop-types */
import "./friends.css";

const Friends = ({ user }) => {
  const friends = user.friends;
  console.log(friends);
  return (
    <main className="friend-list py-1">
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
            <div className="friend-card | relative" key={friend.friendId}>
              <p className="fs-body fw-700 mb-4">{friend.name}</p>
              <p className="italic fs-small mb-1">{friend.email}</p>
              <p className="fw-600">
                Amount: <span>{friend.amount}</span>
              </p>
              <p className="fw-600">
                Total Transactions: <span>{friend.transactions.length}</span>
              </p>
              {friend.amount > 0 && (
                <p className="transaction-text">
                  You will get <span className={btnClass}>{friend.amount}</span>
                </p>
              )}
              {friend.amount < 0 && (
                <p className="transaction-text">
                  You will give{" "}
                  <span className={btnClass}>{friend.amount}</span>
                </p>
              )}
              <button className="btn see-all-transaction-btn">
                See All Transactions
              </button>
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="user"
              />
            </div>
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
