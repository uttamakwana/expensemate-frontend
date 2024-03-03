/* eslint-disable react/prop-types */
import "./history.css";
import TransactionCard from "./TransactionCard.jsx";

const History = ({ client, navigate }) => {
  if (client.transactions.length === 0) {
    return (
      <div className="flex-col gap-8 py-1">
        <p className="text-center">No Transaction History</p>
        <button
          className="btn bg-primary-400 text-white-900 fw-600 margin-inline-auto max-content"
          onClick={() => navigate("/transaction")}
        >
          Create Transaction
        </button>
      </div>
    );
  }
  return (
    <main className="dashboard-history responsive-grid py-1">
      {client.transactions.map((transaction) => (
        <TransactionCard key={transaction._id} transaction={transaction} />
      ))}
    </main>
  );
};

export default History;
