// import { useSelector } from "react-redux";
import { useUserLoggedIn } from "../../hooks/useUserLoggedIn.js";
import {
  Friends,
  Header,
  History,
  Main,
  Requests,
  Transaction,
  Users,
} from "../../components";
import { Route, Routes } from "react-router-dom";
import FriendTransactions from "../../components/FriendTransactions/FriendTransactions.jsx";

const Dashboard = () => {
  console.count("Dashboard rendered!");
  const [client, navigate] = useUserLoggedIn();
  document.title = "SplitWise | Dashboard";
  // const { client } = useSelector((state) => state.userReducer);

  return (
    <div className="flex-col h-100">
      <Header navigate={navigate} />
      <div
        className="container main-dashboard-container"
        style={{ flexGrow: 1 }}
      >
        <Routes>
          <Route
            path="/"
            element={<Main client={client} navigate={navigate} />}
          />
          <Route
            path="/requests"
            element={<Requests client={client} navigate={navigate} />}
          />
          <Route
            path="/users"
            element={<Users client={client} navigate={navigate} />}
          />
          <Route
            path="/transaction"
            element={<Transaction client={client} />}
          />
          <Route
            path="/friends"
            element={<Friends client={client} navigate={navigate} />}
          />
          <Route
            path="/history"
            element={<History client={client} navigate={navigate} />}
          />
          <Route
            path="/friend/:id"
            element={<FriendTransactions client={client} navigate={navigate} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
