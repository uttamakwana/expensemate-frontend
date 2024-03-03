/* eslint-disable react/prop-types */
import "./transaction.css";
import SplitFriendCard from "./SplitFriendCard.jsx";
import ChoosedFriendCard from "./ChoosedFriendCard.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../../api/api.js";
import { setLoading } from "../../store/slice/user-slice.js";
import toast from "react-hot-toast";
import Loader from "../../constants/Loader/Loader.jsx";
import { getUserInfo } from "../../utils/getUserInfo.js";

const Transaction = ({ client }) => {
  const { loading } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [showSplitFriends, setShowSplitFriends] = useState([]);
  const [filteredFriends, setFilteredFriends] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState({});
  const [mainData, setMainData] = useState({
    amount: null,
    description: "",
    friends: selectedFriends,
  });
  const [friendData, setFriendData] = useState({
    share: null,
    description: "",
  });
  const [isWantToSplit, setIsWantToSplit] = useState(false);

  function findSplitSearchFriend(value) {
    const copyFriends = showSplitFriends.filter((e) =>
      e.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFriends(copyFriends);
  }

  useEffect(() => {
    const findActiveOne = selectedFriends.find((e) => e.active);
    setSelectedFriend(findActiveOne);
  }, [selectedFriends]);

  useEffect(() => {
    setShowSplitFriends(client.friends);
    setFilteredFriends(client.friends);
  }, [client]);

  function addFriendData(friend) {
    const findThatFriend = selectedFriends.find(
      (f) => f.friendId === friend.friendId
    );
    if (findThatFriend) {
      findThatFriend.share = friendData.share;
      findThatFriend.description = friendData.description;
    }
    setSelectedFriends(selectedFriends);
    setFriendData({ share: null, description: "" });
  }

  console.log("selected friends:", selectedFriends);

  async function addTransaction() {
    dispatch(setLoading(true));
    try {
      const response = await server.post(
        `transaction/create?split=${isWantToSplit}`,
        {
          userId: client._id,
          amount: mainData.amount,
          description: mainData.description,
          category: "Expense",
          friends: selectedFriends,
        }
      );
      dispatch(setLoading(false));
      toast.success(response.data.message);
      getUserInfo(client._id, dispatch);
      setMainData({ amount: null, description: "" });
      setFriendData({ share: null, description: "" });
      setSelectedFriends([]);
      setIsWantToSplit(false);
    } catch (error) {
      console.log(error);
      error.response && toast.error(error.response.data.message);
      dispatch(setLoading(false));
    }
  }

  if (loading) {
    return <Loader width={"2rem"} height={"2rem"} />;
  }

  return (
    <div className="dashboard-transaction py-1">
      <p className="text-center fs-subheading fw-600 py-8">
        Create your transaction!
      </p>
      <div className="transaction-container">
        {/* Amount Group */}
        <div className="transaction-group">
          <input
            type="number"
            value={mainData.amount}
            className={`${mainData.amount > 0 && "active"}`}
            onChange={(e) =>
              setMainData((prev) => {
                return { ...prev, amount: e.target.value };
              })
            }
          />
          <span>Amount</span>
        </div>
        <div className="transaction-group">
          <input
            type="text"
            value={mainData.description}
            className={`${mainData.description && "active"}`}
            onChange={(e) =>
              setMainData((prev) => {
                return { ...prev, description: e.target.value };
              })
            }
          />
          <span>Description</span>
        </div>
        <div className="transaction-group">
          <input
            type="checkbox"
            id="want-to-split"
            value={isWantToSplit}
            onChange={(e) => setIsWantToSplit(e.target.checked)}
          />
          <label htmlFor="want-to-split">Want to Split?</label>
        </div>
        {isWantToSplit && (
          <div className="transaction-split-container p-1 br-5">
            {/* Search for friend */}
            <div className="transaction-split-group">
              <input
                type="search"
                placeholder="Search your friends..."
                onChange={(e) => findSplitSearchFriend(e.target.value)}
              />
            </div>
            <div className="transaction-split-group show-friends">
              {client.friends.length > 0 ? (
                filteredFriends.map((friend) => (
                  <SplitFriendCard
                    key={friend.friendId}
                    friend={friend}
                    setSelectedFriends={setSelectedFriends}
                  />
                ))
              ) : (
                <p className="text-center">No friends to split!</p>
              )}
            </div>
            {selectedFriends.length > 0 && (
              <p className="fs-small italic my-8">You have selected</p>
            )}
            <div className="transaction-split-group show-friends">
              {selectedFriends.length > 0 &&
                selectedFriends.map((friend) => (
                  <ChoosedFriendCard
                    key={friend.friendId}
                    friend={friend}
                    selectedFriends={selectedFriends}
                    setSelectedFriends={setSelectedFriends}
                    selectedFriend={selectedFriend}
                    setSelectedFriend={setSelectedFriend}
                    setFriendData={setFriendData}
                  />
                ))}
            </div>
            {selectedFriend && (
              <div className="split-friend-input-container mt-8">
                <div className="split-friend-input-group">
                  <input
                    type="number"
                    value={friendData.share !== null && friendData.share}
                    onChange={(e) =>
                      setFriendData((prev) => {
                        return { ...prev, share: e.target.value };
                      })
                    }
                    placeholder={`Share of ${selectedFriend.name}`}
                  />
                </div>
                <div className="split-friend-input-group">
                  <input
                    type="text"
                    value={friendData.description}
                    onChange={(e) =>
                      setFriendData((prev) => {
                        return { ...prev, description: e.target.value };
                      })
                    }
                    placeholder={`Description for ${selectedFriend.name}`}
                  />
                </div>
                {friendData.share > 0 && friendData.description && (
                  <button
                    className="flex-center btn bg-primary-900 fs-button text-white-900 fw-600"
                    type="button"
                    onClick={() => {
                      addFriendData(selectedFriend);
                      toast.success("Friend data added!");
                    }}
                  >
                    Add Friend
                  </button>
                )}
              </div>
            )}
          </div>
        )}
        {mainData.amount > 0 && mainData.description && (
          <button
            className="flex-center btn bg-primary-400 fs-button text-white-900 fw-600"
            type="button"
            onClick={addTransaction}
          >
            Add Transaction
          </button>
        )}
      </div>
    </div>
  );
};

export default Transaction;
