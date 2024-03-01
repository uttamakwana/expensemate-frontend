import { useState } from "react";
import "./transaction.css";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Transaction = () => {
  const { client } = useSelector((state) => state.userReducer);
  const [isWantToSplit, setIsWantToSplit] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friendAmount, setFriendAmount] = useState();
  console.log(friendAmount);
  const [friendDescription, setFriendDescription] = useState();
  console.log(selectedFriend);
  const copyFriendsData = client.friends.map((e) => {
    return {
      friendId: e.friendId,
      name: e.name,
      email: e.email,
      amount: null,
      description: null,
    };
  });
  const [friendsData, setFriendsData] = useState(copyFriendsData);
  console.log(friendsData);

  function handleFriendDataSubmit(friend) {
    if (!friendAmount && !friendDescription)
      return toast.error("Add both amount and description!");
    const handleFriendsData = friendsData.map((d) => {
      if (d.friendId === friend.friendId) {
        return {
          ...d,
          amount: friendAmount,
          description: friendDescription,
        };
      } else return d;
    });
    setFriendsData(handleFriendsData);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="dashboard-transaction small-container p-1 br-10">
      <form action="" className="flex-col gap-1 " onSubmit={handleSubmit}>
        <div className="transaction-form-group">
          <input
            type="number"
            name="transaction-amount"
            id="transaction-amount"
          />
          <span>Amount</span>
        </div>
        <div className="transaction-form-group">
          <input
            type="text"
            name="transaction-description"
            id="transaction-description"
          />
          <span>Description</span>
        </div>
        <div className="transaction-form-group flex gap-4">
          <input
            type="checkbox"
            name="transaction-want-to-split"
            id="transaction-want-to-split"
            onChange={(e) => setIsWantToSplit(e.target.checked)}
          />
          <label htmlFor="transaction-want-to-split">Want to split?</label>
        </div>
        {isWantToSplit && (
          <div className="select-friends flex gap-1">
            {friendsData.length > 0 ? (
              friendsData.map((friend) => (
                <span
                  key={friend.friendId}
                  className={`py-8 px-1 oval bg-white-800 ${
                    selectedFriend &&
                    selectedFriend.friendId === friend.friendId &&
                    "active"
                  }`}
                  onClick={() => {
                    setSelectedFriend(friend);
                  }}
                >
                  {friend.name}
                </span>
              ))
            ) : (
              <p className="text-danger">No friends to split bills!</p>
            )}
          </div>
        )}
        {selectedFriend && isWantToSplit && (
          <div className="selected-friend-form-group flex-col gap-1 p-1 bg-white-700">
            <p className="italic">Split bills with {selectedFriend.name}</p>
            <input
              type="number"
              name="selected-friend-amount"
              className="input"
              placeholder={`Amount for ${selectedFriend.name}`}
              value={friendAmount}
              onChange={(e) => {
                setFriendAmount(e.target.value);
              }}
            />
            <input
              type="text"
              name="selected-friend-description"
              className="input"
              placeholder={`Description for ${selectedFriend.name}`}
              value={
                selectedFriend.description
                  ? selectedFriend.description
                  : friendDescription
              }
              onChange={(e) => setFriendDescription(e.target.value)}
            />
            <button
              className="btn bg-primary-900 text-white-900 fs-button"
              onClick={() => handleFriendDataSubmit(selectedFriend)}
            >
              {selectedFriend.amount || selectedFriend.description
                ? "Edit Friend"
                : "Add Friend"}
            </button>
          </div>
        )}
        <button className="btn bg-primary-400 fs-button text-white-900 fw-600">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default Transaction;
