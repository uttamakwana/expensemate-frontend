/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import "../styles.css";
import "./header.css";
import { RequestIcon, SearchIcon } from "../../constants/icons";

const Header = ({ navigate }) => {
  const { pathname } = useLocation();
  const currentPage = pathname.split("/").at(-1);
  return (
    <header className="header py-1 bg-primary-900">
      <div className="container flex-between">
        <div
          className="header-logo | flex-col flex-center ai-flex-start"
          onClick={() => navigate("/dashboard")}
        >
          <h1 className="big-logo-heading | text-white-900">
            Expense<span className="italic text-white-400 ">Mate</span>
          </h1>
          <p
            className="py-4 px-8 oval bg-primary-400 text-white-900 flex-center"
            style={{ fontSize: "12px", width: "max-content" }}
          >
            &quot;Track, Split & Simplify&quot;
          </p>
        </div>
        <div className="header-navigation flex ai-center gap-1">
          <div
            className={`header-nav  ${currentPage === "requests" && "active"}`}
            onClick={() => navigate("/dashboard/requests")}
          >
            <RequestIcon />
          </div>
          <div
            className={`header-nav ${currentPage === "users" && "active"}`}
            onClick={() => navigate("/dashboard/users")}
          >
            <SearchIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
