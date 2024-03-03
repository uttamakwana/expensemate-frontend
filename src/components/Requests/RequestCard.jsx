/* eslint-disable react/prop-types */
import { getImageUrl } from "../../utils/getImageUrl.js";
import { DoneIcon, CancelIcon } from "../../constants/icons.js";
import "./requests.css";
import { server } from "../../api/api.js";
import toast from "react-hot-toast";
import { getUserInfo } from "../../utils/getUserInfo.js";
import { useDispatch } from "react-redux";

const RequestCard = ({ client, friendRequest }) => {
  const imageUrl = getImageUrl(client);
  const dispatch = useDispatch();

  async function handleRequest(status) {
    try {
      const response = await server.post(`friend/request?status=${status}`, {
        userId: client._id,
        friendId: friendRequest.userId,
      });
      toast.success(response.data.message);
      getUserInfo(client._id, dispatch);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="friend-request-card flex-between gap-1">
      <div className="friend-request-card-profile flex gap-8">
        <div className="friend-request-card-avatar">
          <img src={imageUrl} alt="avatar" />
        </div>
        <div className="friend-request-card-name">
          <p className="fw-500">{friendRequest.name}</p>
          <p className="text-black-700">{friendRequest.email}</p>
        </div>
      </div>
      <div className="friend-request-card-buttons flex gap-8">
        <div className="p-8 circle" onClick={() => handleRequest("accept")}>
          <DoneIcon />
        </div>
        <div className="p-8 circle" onClick={() => handleRequest("decline")}>
          <CancelIcon />
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
