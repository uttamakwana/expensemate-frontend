/* eslint-disable react/prop-types */
const FriendCard = ({ friend, btnClass }) => {
  return (
    <div className="card friend-card | relative" key={friend.friendId}>
      <p className="card-heading fs-body fw-700 mb-4">{friend.name}</p>
      <p className="card-subheading italic fs-small mb-1">{friend.email}</p>
      <p className="friend-card-amount | fw-600">
        Amount: <span>{friend.amount}</span>
      </p>
      <p className="friend-card-total-transactions | fw-600">
        Total Transactions: <span>{friend.transactions.length}</span>
      </p>
      {friend.amount > 0 && (
        <p className="friend-card-transaction-text">
          You will get <span className={btnClass}>{friend.amount}</span>
        </p>
      )}
      {friend.amount < 0 && (
        <p className="friend-card-transaction-text">
          You will give <span className={btnClass}>{friend.amount}</span>
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
};

export default FriendCard;
