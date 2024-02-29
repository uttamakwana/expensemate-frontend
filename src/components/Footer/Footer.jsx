/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import {
  SearchIcon,
  FriendsIcon,
  HistoryIcon,
  RequestIcon,
  DashboardIcon,
} from "../../constants/icons.js";
import "./footer.css";

const Footer = ({ navigate }) => {
  const { pathname } = useLocation();
  const currentPage = pathname.split("/").at(-1);
  console.log(currentPage);
  return (
    <footer className="footer | bg-primary-900 py-8 text-white-900">
      <div className="container">
        <nav className="footer-navigation | flex-center gap-1 fs-heading">
          <div
            className={`footer-nav ${currentPage === "dashboard" && "active"}`}
            onClick={() => navigate("/dashboard")}
          >
            <span>Home</span>
            <DashboardIcon />
          </div>
          <div
            className={`footer-nav nav ${
              currentPage === "friends" && "active"
            }`}
            onClick={() => navigate("/dashboard/friends")}
          >
            <span>Friends</span>
            <FriendsIcon />
          </div>
          <div
            className={`footer-nav nav requests-nav ${
              currentPage === "requests" && "active"
            }`}
            onClick={() => navigate("/dashboard/requests")}
          >
            <span>Requests</span>
            <RequestIcon />
          </div>
          <div
            className={`footer-nav search-nav ${
              currentPage === "users" && "active"
            }`}
            onClick={() => navigate("/dashboard/users")}
          >
            <span>Search</span>
            <SearchIcon />
          </div>
          <div
            className={`footer-nav history-nav ${
              currentPage === "history" && "active"
            }`}
            onClick={() => navigate("/dashboard/history")}
          >
            <span>History</span>
            <HistoryIcon />
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
