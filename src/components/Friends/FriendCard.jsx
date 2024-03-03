/* eslint-disable react/prop-types */
import "./friends.css";
import { getImageUrl } from "../../utils/getImageUrl.js";
import { useNavigate } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  const imageUrl = getImageUrl(friend);
  let amountClass;
  if (friend.amount === 0) {
    amountClass = "";
  } else if (friend.amount > 0) {
    amountClass = "success";
  } else {
    amountClass = "danger";
  }
  return (
    <div className="friend-card relative fs-body-2">
      <p className="friend-card-name fw-500 ">{friend.name}</p>
      <p className="friend-card-email text-black-700 fs-small italic">
        {friend.email}
      </p>
      <p className="friend-card-total-transactions mt-1">
        Total Transactions:{" "}
        <span className="fw-600">{friend.transactions.length}</span>
      </p>
      <p className="friend-card-summary mt-1">
        You will get{" "}
        <span className={`underline ${amountClass}`}>{friend.amount}</span>
      </p>
      <button
        className="friend-card-btn max-content"
        onClick={() => navigate(`/dashboard/friend/${friend._id}`)}
      >
        See All Transactions
      </button>
      <img src={imageUrl} alt="avatar" />
    </div>
  );
};

export default FriendCard;
