/* eslint-disable react/prop-types */
import { formateTime } from "../../utils/formateTime";

const TransactionCard = ({ transaction }) => {
  return (
    <div className="transaction-card relative">
      <p>
        <span className="fw-500">Description:</span> {transaction.description}
      </p>
      <p className="fs-small">
        <span className="fw-500">Created At:</span>{" "}
        {formateTime(transaction.createdAt)}
      </p>
      <p className="amount absolute">{transaction.amount}</p>
      {transaction.friends.length > 0 && (
        <div className="flex gap-1 wrap">
          {transaction.friends.map((friend, index) => (
            <p key={friend.friendId} className="fs-extrasmall">
              <span className="fw-500">{friend.name?.split(" ").at(0)}</span>:{" "}
              <span>{friend.share}</span>{" "}
              {transaction.friends.length - 1 === index ? "" : ","}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionCard;
