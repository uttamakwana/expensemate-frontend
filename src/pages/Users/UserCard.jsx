/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { handleFriendRequest } from "./utils";
import { DoneIcon } from "../../constants/icons.js";

// eslint-disable-next-line react/prop-types
const UserCard = ({ user, ourId }) => {
  const dispatch = useDispatch();
  const { user: me } = useSelector((state) => state.userReducer);
  console.log(me);
  const alreadySentFR = me.friendRequests.find(
    (req) => req.userId === user._id
  );
  console.log(alreadySentFR);
  if (user._id !== ourId) {
    return (
      <div className="user-card card flex-col gap-4 relative">
        <p className="card-heading">{user.name}</p>
        <p className="card-subheading italic clr-white-500">{user.email}</p>
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="user-image"
        />
        {alreadySentFR ? (
          <button
            className="px-1 py-8 oval bg-white-900 text-primary-400 border-none outline-none"
            onClick={() => handleFriendRequest(user, ourId, dispatch)}
          >
            Already Sent <DoneIcon />
          </button>
        ) : (
          <button
            className="px-1 py-8 oval bg-white-900 text-primary-400 border-none outline-none"
            onClick={() => handleFriendRequest(user, ourId, dispatch)}
          >
            Create Friend <span className="plus-icon">+</span>
          </button>
        )}
      </div>
    );
  }
};

export default UserCard;
