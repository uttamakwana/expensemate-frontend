/* eslint-disable react/prop-types */
import "./main.css";
import { findExpense, findFriendRequests, findFriends } from "./utils";

const Main = ({ user }) => {
  const { totalExpense, personalExpense, totalFriendsExpense } =
    findExpense(user);
  const { totalFriends } = findFriends(user);
  const { totalFriendRequests } = findFriendRequests(user);

  return (
    <main className="dashboard-main">
      <h1 className="fs-subheading fw-600 py-4 text-center">
        Welcome <span className="fw-700 text-primary-400">{user.name}🚀</span>
      </h1>
      <div className="dashboard-main-cards-grid">
        <div className="dashboard-main-card total-expense">
          <p className="fs-body fw-700 mb-4">Expenses</p>
          <p className="italic fs-small mb-1">Track your daily expenses!</p>
          <p className="fw-600">
            Personal Expense: <span>{personalExpense}</span>
          </p>
          <p className="fw-600">
            Total Expense: <span>{totalExpense}</span>
          </p>
          <button className="btn">Track</button>
        </div>
        <div className="dashboard-main-card friends">
          <p className="fs-body fw-700 mb-4">Friends</p>
          <p className="italic fs-small mb-1">
            Split bills among friends easily!
          </p>
          <p className="fw-600">
            Total Friends: <span>{totalFriends}</span>
          </p>
          <p className="fw-600">
            Total {"Friend's"} Expense: <span>{totalFriendsExpense}</span>
          </p>
          <button className="btn">Checklist</button>
        </div>
        <div className="dashboard-main-card friends">
          <p className="fs-body fw-700 mb-4">Friend Requests</p>
          <p className="italic fs-small mb-1">Create friend and split bills!</p>
          <p className="fw-600">
            Pending Requests: <span>{totalFriendRequests}</span>
          </p>
          {totalFriendRequests === 0 ? (
            <button className="btn">Find Friends</button>
          ) : (
            <button className="btn">Clear</button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
