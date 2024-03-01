/* eslint-disable react/prop-types */
import {
  CardButton,
  CardHeading,
  CardSubHeading,
} from "../../constants/Card/Card.jsx";
import { avatar } from "../../constants/images.js";
import "./users.css";
import { server } from "../../api/api.js";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { GetUserContext } from "../../context/GetUser.jsx";
import toast from "react-hot-toast";

const UserCard = ({ user }) => {
  const { setIsGetUser } = useContext(GetUserContext);
  const { client } = useSelector((state) => state.userReducer);
  async function handleSendFriendRequest() {
    try {
      const response = await server.post(`friend/send-request`, {
        userId: client._id,
        friendId: user._id,
      });
      console.log(response);
      setIsGetUser((prev) => prev + 1);
    } catch (error) {
      console.log(error.response.data);
    }
  }
  return (
    <div className="dashboard-users-grid-item grid-item-invert">
      <div className="dashboard-grid-item-left flex gap-8">
        <div className="circle">
          <img src={avatar} alt="avatar" className="circle" />
        </div>
        <div className="flex-col gap-4">
          <CardHeading>{user.name}</CardHeading>
          <CardSubHeading>{user.email}</CardSubHeading>
        </div>
      </div>
      <div className="dashboard-grid-item-right">
        {/* <button>Create Friend</button> */}
        {user.alreadySent ? (
          <CardButton
            alreadySent={user.alreadySent}
            onClick={() => toast.success("Request is already sent!")}
          >
            Already Sent!
          </CardButton>
        ) : (
          <CardButton
            onClick={() => {
              handleSendFriendRequest();
            }}
          >
            Create Friend
          </CardButton>
        )}
      </div>
    </div>
  );
};

export default UserCard;
