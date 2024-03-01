/* eslint-disable react/prop-types */
import {
  CardHeading,
  CardSubHeading,
  CardButton,
} from "../../constants/Card/Card.jsx";
import "./friends.css";
import { avatar } from "../../constants/images.js";

const FriendCard = ({ friend }) => {
  let AmountText;
  let AmountClass;
  if (friend.amount === 0) {
    AmountText = "Create transactions now!";
    AmountClass = "";
  } else if (friend.amount > 0) {
    AmountText = `You will get ${friend.amount}`;
    AmountClass = "success";
  } else {
    AmountText = `You will give ${friend.amount}`;
    AmountClass = "danger";
  }
  return (
    <div className="friend-grid-item grid-item relative">
      <CardHeading>{friend.name}</CardHeading>
      <CardSubHeading>{friend.email}</CardSubHeading>
      <p className="fw-600">Total Amount: {friend.amount}</p>
      <p className="fw-600">Total Transactions: {friend.transactions.length}</p>
      <p className={AmountClass}>{AmountText}</p>
      <img src={avatar} alt="avatar" className="friend-card-img" />
      <CardButton>See All Transactions!</CardButton>
    </div>
  );
};

export default FriendCard;
