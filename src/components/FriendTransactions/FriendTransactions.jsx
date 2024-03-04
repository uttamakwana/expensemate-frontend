/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { formateTime } from "../../utils/formateTime.js";
import "./friend-transaction.css";

const FriendTransactions = ({ client, navigate }) => {
  const { id } = useParams();
  const thatFriend = client.friends.find((f) => f._id === id);
  const transctionsToShow = thatFriend.transactions;
  return transctionsToShow.length > 0 ? (
    <div className="friend-transactions-card responsive-grid py-1">
      {transctionsToShow.map((transaction) => (
        <div className="friend-transaction-card" key={transaction._id}>
          <p className="fw-500">Share: {transaction.share}</p>
          <p>Description: {transaction.description}</p>
          <p>Created At: {formateTime(transaction.createdAt)}</p>
          <p>Paid Status: {transaction.paid ? "Paid!" : "Unpaid!"}</p>
        </div>
      ))}
    </div>
  ) : (
    <div className="flex-col gap-8 py-1">
      <p className="text-center">
        No transactions with <span className="fw-600">{thatFriend.name}</span>
      </p>
      <button
        onClick={() => navigate("/dashboard/friends")}
        className="btn bg-primary-400 text-white-900 fw-600 oval max-content margin-inline-auto"
      >
        Go to friends
      </button>
    </div>
  );
};

export default FriendTransactions;
