// redux
import { useSelector } from "react-redux";
// custom hook
import { useUserLoggedIn } from "../../hooks/useUserLoggedIn";
// componetns
import { Footer, Header } from "../../components";
// constants
import Loader from "../../constants/Loader/Loader.jsx";

const Dashboard = () => {
  // custom hook
  const [user, navigate] = useUserLoggedIn();
  // redux
  const { loading } = useSelector((state) => state.userReducer);

  if (loading) {
    return (
      <div className="overlay flex-center">
        <Loader width={"2.5rem"} height={"2.5rem"} />
      </div>
    );
  }

  return (
    <main className="dashboard-page | h-100 flex-col">
      <Header navigate={navigate} />
      <main className="main | bg-white-800 flex-grow-1">
        <div className="container">{user.name}</div>
      </main>
      <Footer navigate={navigate} />
    </main>
  );
};

export default Dashboard;
