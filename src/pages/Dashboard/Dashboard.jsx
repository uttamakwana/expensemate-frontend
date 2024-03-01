// redux
import { useSelector } from "react-redux";
// custom hook
import { useUserLoggedIn } from "../../hooks/useUserLoggedIn";
// componetns
import {
  Footer,
  Header,
  Main,
  Friends,
  Requests,
  Users,
  History,
  Transaction,
} from "../../components";
// constants
import Loader from "../../constants/Loader/Loader.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import { BackIcon, PlusIcon } from "../../constants/icons.js";
import "../styles.css";

const Dashboard = () => {
  console.count("Dashboard rendered!");
  // custom hook
  const [user, navigate] = useUserLoggedIn({ getUser: true });
  // redux
  const { loading } = useSelector((state) => state.userReducer);
  // path
  const { pathname } = useLocation();

  if (loading) {
    return (
      <div className="overlay flex-center">
        <Loader width={"2.5rem"} height={"2.5rem"} />
      </div>
    );
  }

  return (
    <main className="dashboard-page | h-100 flex-col relative">
      <Header navigate={navigate} />
      <main className="main | bg-white-800 flex-grow-1">
        <div className="container py-1">
          <Routes>
            <Route
              path="/"
              element={<Main user={user} navigate={navigate} />}
            />
            <Route path="/friends" element={<Friends />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/users" element={<Users />} />
            <Route path="/history" element={<History />} />
            <Route path="/transaction" element={<Transaction />} />
          </Routes>
        </div>
      </main>
      <Footer navigate={navigate} />
      <div
        className="create-transaction-btn absolute circle p-1 bg-white-900"
        onClick={() => {
          if (pathname === "/dashboard/transaction") {
            navigate("/dashboard/");
          } else {
            navigate("/dashboard/transaction");
          }
        }}
      >
        {pathname === "/dashboard/transaction" ? <BackIcon /> : <PlusIcon />}
      </div>
    </main>
  );
};

export default Dashboard;
