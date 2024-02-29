/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { server } from "../../api/api";
import { DoneIcon, CancelIcon } from "../../constants/icons.js";
import { useDispatch, useSelector } from "react-redux";
import { handleRequest } from "./utils.js";

const RequestCard = ({ req }) => {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [reqUser, setReqUser] = useState(null);
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await server.get(`/user?id=${req.userId}`);
        console.log(response.data.data.user);
        setReqUser(response.data.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, [req]);
  if (reqUser) {
    return (
      <div className="card request-card">
        <div className="card-left">
          <p className="card-heading">{reqUser.name}</p>
          <p className="card-subheading italic text-black-800">
            {reqUser.email}
          </p>
        </div>
        <div className="card-right flex gap-1">
          <button
            className="flex gap-4"
            onClick={() =>
              handleRequest(user._id, req.userId, "accept", dispatch)
            }
          >
            Accept <DoneIcon />
          </button>
          <button
            className="flex gap-4"
            onClick={() =>
              handleRequest(user._id, req.userId, "decline", dispatch)
            }
          >
            Reject <CancelIcon />
          </button>
        </div>
      </div>
    );
  }
};

export default RequestCard;
