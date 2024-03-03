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
          <p>Total Expense: {totalExpense}</p>
          <p>Total Personal Expense:{totalPersonalExpense}</p>
          <p>Number of Transactions:{client.transactions.length}</p>
          <button onClick={() => navigate("/dashboard/history")}>
            See All Transactions
          </button>
        </div>
        <div className="dashboard-main-card main-card">
          <p className="main-card-heading">Friends</p>
          <p className="main-card-subheading">Split bills among friends!</p>
          <p>Total Friends: {client.friends.length}</p>
          <p>Total Friend Expense: {totalFriendExpense}</p>
          <button onClick={() => navigate("/dashboard/friends")}>
            See All Friends
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
