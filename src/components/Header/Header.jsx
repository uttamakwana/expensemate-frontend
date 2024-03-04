/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import "../styles.css";
import "./header.css";
import { PlusIcon, RequestIcon, SearchIcon } from "../../constants/icons";
import { useSelector } from "react-redux";
import { getImageUrl } from "../../utils/getImageUrl";
import { FaHome } from "react-icons/fa";

const Header = ({ navigate }) => {
  const { client } = useSelector((state) => state.userReducer);
  const { pathname } = useLocation();
  const currentPage = pathname.split("/").at(-1);
  let imageUrl = getImageUrl(client);
  console.log(currentPage);

  return (
    <header className="header py-1 bg-primary-900 sticky-top">
      <div className="container flex-between">
        <div
          className="header-logo | flex-col flex-center ai-flex-start"
          onClick={() => navigate("/dashboard")}
        >
          <h1 className="big-logo-heading | text-white-900">
            Split<span className="italic text-white-400 ">Wise</span>
          </h1>
          <p
            className="py-4 px-8 oval bg-primary-400 text-white-900 flex-center"
            style={{ width: "max-content" }}
          >
            &quot;Track, Split & Simplify&quot;
          </p>
        </div>
        <div className="header-navigation flex ai-center gap-1">
          {currentPage !== "dashboard" && (
            <div
              className={`header-nav main-home-icon  ${
                currentPage === "dashboard" && "active"
              }`}
              onClick={() => navigate("/dashboard")}
            >
              <FaHome />
            </div>
          )}
          {currentPage !== "transaction" && (
            <button
              className="add-transaction-btn flex-center gap-4"
              onClick={() => navigate("/dashboard/transaction")}
            >
              <PlusIcon /> Add Expense
            </button>
          )}

          <button
            className="add-transaction-mobile-btn flex-center gap-4"
            onClick={() => {
              if (currentPage === "transaction") {
                navigate("/dashboard/");
              } else {
                navigate("/dashboard/transaction");
              }
            }}
          >
            {currentPage === "transaction" ? <FaHome /> : <PlusIcon />}
          </button>
          <div
            className={`header-nav ${currentPage === "users" && "active"}`}
            onClick={() => navigate("/dashboard/users")}
          >
            <SearchIcon />
          </div>
          <div
            className={`header-nav header-request-nav  ${
              currentPage === "requests" && "active"
            }`}
            onClick={() => navigate("/dashboard/requests")}
          >
            <RequestIcon />
            <span className="header-request-nav-span">
              {client.friendRequests.length}
            </span>
          </div>
          <div className="header-avatar">
            <img src={imageUrl} alt="avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
