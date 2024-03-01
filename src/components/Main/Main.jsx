/* eslint-disable react/prop-types */
import {
  CardHeading,
  CardButton,
  CardSubHeading,
} from "../../constants/Card/Card";
import "./main.css";
import "../styles.css";

const Main = ({ client, navigate }) => {
  return (
    <main className="dashboard-main main-grid | responsive-grid">
      {/* Total Expense */}
      <div className="main-grid-item grid-item total-expense">
        <CardHeading>Expense</CardHeading>
        <CardSubHeading>Track your daily expense easily!</CardSubHeading>
        <div className="fs-small mt-1">
          <p className="fw-600">Total Personal Expense</p>
          <p className="fw-600">Total Expense</p>
        </div>
        <CardButton>Track</CardButton>
      </div>
      <div className="main-grid-item grid-item friends">
        <CardHeading>Friends</CardHeading>
        <CardSubHeading>Split bills among friends easily!</CardSubHeading>
        <div className="fs-small mt-1">
          <p className="fw-600">Total Friend Expense</p>
          <p className="fw-600">Total Friends</p>
        </div>
        <CardButton>Checklist</CardButton>
      </div>
      <div className="main-grid-item grid-item requests">
        <CardHeading>Reqeusts</CardHeading>
        <CardSubHeading>{"Don't"} let your friend wait!</CardSubHeading>
        <div className="fs-small mt-1">
          <p className="fw-600">Pending Requests:</p>
        </div>
        <CardButton marginTop={"auto"}>Clear</CardButton>
      </div>
      {/* Friends */}
      {/* Requests */}
    </main>
  );
};

export default Main;
