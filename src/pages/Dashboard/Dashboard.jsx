// componetns
import { Route, Routes } from "react-router-dom";
import { Footer, Header, Main } from "../../components";
import { useUserLoggedIn } from "../../hooks/useUserLoggedIn";
import { Friends, History, Requests, Users } from "../index.js";

const Dashboard = () => {
  // custom hook
  const [user, navigate] = useUserLoggedIn();
  return (
    <main className="dashboard-page | h-100 flex-col">
      <Header navigate={navigate} />
      <main className="main | bg-white-800 flex-grow-1">
        <div className="container">
          <Routes>
            <Route path="/" element={<Main user={user} />} />
            <Route path="/friends" element={<Friends user={user} />} />
            <Route
              path="/requests"
              element={<Requests user={user} navigate={navigate} />}
            />
            <Route path="/users" element={<Users />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </main>
      <Footer navigate={navigate} />
    </main>
  );
};

export default Dashboard;
