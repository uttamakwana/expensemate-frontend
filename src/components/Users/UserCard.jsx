import { useDispatch } from "react-redux";
import { server } from "../../api/api";
import { getImageUrl } from "../../pages/Dashboard/utils";
import { getUserInfo } from "../../utils/getUserInfo";
import "./users.css";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
const UserCard = ({ user, client }) => {
  const imageUrl = getImageUrl(user);
  const dispatch = useDispatch();

  async function sendFriendRequest() {
    try {
      const response = await server.post("/friend/send-request", {
        userId: client._id,
        friendId: user._id,
      });
      getUserInfo(client._id, dispatch);
      console.log(response.data.data);
    } catch (error) {
      error.response && toast.error(error.response.data.message);
      console.log(error);
    }
  }
  return (
    <div className="user-card flex-col gap-8">
      <div className="user-card-profile flex gap-1">
        <div className="user-card-avatar">
          <img src={imageUrl} alt="avatar" />
        </div>
        <div className="user-card-profile-name">
          <p className="fw-500">{user.name}</p>
          <p className="fs-small">{user.email}</p>
        </div>
      </div>
      <button
        className="user-card-send-fr-btn | max-content"
        disabled={user.alreadySent}
        onClick={sendFriendRequest}
      >
        {user?.alreadySent ? "Already Sent!" : "Create Friend"}
      </button>
    </div>
  );
};

export default UserCard;
