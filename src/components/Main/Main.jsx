/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const Main = ({ client, navigate }) => {
  return (
    <main className="dashboard-main py-4">
      <p className="text-center fs-subheading fw-600 py-1">
        Welcome <span className="text-primary-400 italic">{client.name}</span>
      </p>
      <div className="dashboard-main-cards main-cards">
        <div className="dashboard-main-card main-card">
          <p className="main-card-heading">Expenses</p>
          <p className="main-card-subheading">Track your daily expenses!</p>
          <p>Total Expenses:</p>
          <p>Total Personal Expense:</p>
          <button onClick={() => navigate("/dashboard/history")}>
            See All Transactions
          </button>
        </div>
        <div className="dashboard-main-card main-card">
          <p className="main-card-heading">Friends</p>
          <p className="main-card-subheading">Split bills among friends!</p>
          <p>Total Friends:</p>
          <p>Total Friend Expense:</p>
          <button onClick={() => navigate("/dashboard/friends")}>
            See All Friends
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
