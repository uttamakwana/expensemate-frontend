import { expense, friends } from "../../constants/images.js";

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const Main = ({ client, navigate }) => {
  const totalExpense = client.transactions.reduce(
    (total, currentValue) => total + currentValue.amount,
    0
  );
  const totalFriendExpense = client.friends.reduce(
    (total, currentValue) => total + currentValue.amount,
    0
  );
  const totalPersonalExpense = totalExpense - totalFriendExpense;
  return (
    <main className="dashboard-main py-4">
      <p className="text-center fs-subheading fw-600 py-1">
        Welcome <span className="text-primary-400 italic">{client.name}</span>
      </p>
      <div className="dashboard-main-cards main-cards">
        <div className="dashboard-main-card main-card">
          <p className="main-card-heading">Expenses</p>
          <p className="main-card-subheading">Track your daily expenses!</p>
          <p>
            <span className="fw-600">Total Expense:</span> {totalExpense}
          </p>
          <p>
            <span className="fw-600">Total Personal Expense:</span>
            {totalPersonalExpense}
          </p>
          <p>
            <span className="fw-600">Number of Transactions:</span>
            {client.transactions.length}
          </p>
          <button onClick={() => navigate("/dashboard/history")}>
            See All Transactions
          </button>
          <img src={expense} alt="expense-img" />
        </div>
        <div className="dashboard-main-card main-card">
          <p className="main-card-heading">Friends</p>
          <p className="main-card-subheading">Split bills among friends!</p>
          <p>
            <span className="fw-600">Total Friends:</span>{" "}
            {client.friends.length}
          </p>
          <p>
            <span className="fw-600">Total Friend Expense:</span>{" "}
            {totalFriendExpense}
          </p>
          <button onClick={() => navigate("/dashboard/friends")}>
            See All Friends
          </button>
          <img src={friends} alt="expense-img" />
        </div>
      </div>
    </main>
  );
};

export default Main;
