/* eslint-disable react/prop-types */
import { DoneIcon, CancelIcon } from "../../constants/icons";
import { avatar } from "../../constants/images.js";
import { CardHeading, CardSubHeading } from "../../constants/Card/Card.jsx";
import "./requests.css";
import { server } from "../../api/api.js";
import { useContext } from "react";
import { GetUserContext } from "../../context/GetUser.jsx";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const RequestCard = ({ request }) => {
  const { setIsGetUser } = useContext(GetUserContext);
  const { client } = useSelector((state) => state.userReducer);
  async function handleFriendRequest(status) {
    try {
      const response = await server.post(`/friend/request?status=${status}`, {
        userId: client._id,
        friendId: request.userId,
      });
      setIsGetUser((prev) => prev + 1);

      toast.success(response.data.data.message);
    } catch (error) {
      console.log(error.response);
    }
  }
  return (
    <div className="request-grid-item grid-item-invert">
      <div className="request-grid-item-left flex gap-4">
        <div className="circle">
          <img src={avatar} alt="avatar" className="circle" />
        </div>
        <div className="flex-col gap-4">
          <CardHeading>{request.name || "user"}</CardHeading>
          <CardSubHeading>{request.email || "email"}</CardSubHeading>
        </div>
      </div>
      <div className="request-grid-item-right flex gap-1">
        <div className="accept" onClick={() => handleFriendRequest("accept")}>
          <DoneIcon />
        </div>
        <div className="reject" onClick={() => handleFriendRequest("decline")}>
          <CancelIcon />
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
