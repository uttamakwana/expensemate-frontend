import { getImageUrl } from "../../utils/getImageUrl";

/* eslint-disable react/prop-types */
const SplitFriendCard = ({ friend, setSelectedFriends }) => {
  const imageUrl = getImageUrl(friend);

  function handleSelectedFriend() {
    const friendValue = {
      friendId: friend.friendId,
      share: 0,
      description: "",
      name: friend.name,
      email: friend.email,
      avatar: friend.avatar,
      category: "",
    };
    setSelectedFriends((prev) => {
      const findThatFriend = prev.find((f) => f.friendId === friend.friendId);
      if (!findThatFriend) {
        const cc = prev.map((e) => {
          return { ...e, active: false };
        });
        return [...cc, { ...friendValue, active: true }];
      } else {
        return prev;
      }
    });
  }
  return (
    <div
      className="split-friend-card flex ai-center gap-8 pointer"
      onClick={handleSelectedFriend}
    >
      <div className="split-friend-avatar">
        <img src={imageUrl} alt="avatar" />
      </div>
      <p className="fw-600">{friend.name}</p>
    </div>
  );
};

export default SplitFriendCard;
