import { getImageUrl } from "../../utils/getImageUrl";
import { CancelIcon } from "../../constants/icons.js";

/* eslint-disable react/prop-types */
const ChoosedFriendCard = ({
  friend,
  selectedFriends,
  setSelectedFriends,
  setSelectedFriend,
  selectedFriend,
  setFriendData,
}) => {
  const imageUrl = getImageUrl(friend);

  function removeSelectedFriend(id) {
    const copyFriends = selectedFriends.filter((f) => f.friendId !== id);
    setSelectedFriends(copyFriends);
  }

  return (
    <div
      className={`split-friend-card flex ai-center gap-8 pointer ${
        friend.share !== 0 && friend.description !== "" && "added"
      }`}
      style={{
        border:
          selectedFriend &&
          selectedFriend.friendId === friend.friendId &&
          "1px solid var(--clr-primary-400)",
      }}
      onClick={() => {
        setSelectedFriend({
          friendId: friend.friendId,
          share: 0,
          description: "",
          name: friend.name,
          email: friend.email,
          avatar: friend.avatar,
          category: "",
        });
        setFriendData({ share: null, description: "" });
      }}
    >
      <div className="split-friend-avatar">
        <img src={imageUrl} alt="avatar" />
      </div>
      <p className="fw-600">{friend.name}</p>
      <CancelIcon onClick={() => removeSelectedFriend(friend.friendId)} />
    </div>
  );
};

export default ChoosedFriendCard;
