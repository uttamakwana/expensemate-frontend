import { landing } from "../../constants/images.js";
// components
import { Button } from "../../components";
import "./landing.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Landing = () => {
  const navigate = useNavigate();
  const { client } = useSelector((state) => state.userReducer);
  const clientInLocalStorage = JSON.parse(
    localStorage.getItem("expensemate-client")
  );

  useEffect(() => {
    if (client && clientInLocalStorage) {
      return navigate("/dashboard");
    }
  }, [client, clientInLocalStorage, navigate]);
  return (
    <main className="landing-page | h-100 relative flex-center">
      <img src={landing} alt="landing-page" />
      <div className="container flex-center flex-col gap-8 text-center">
        <h1 className="fw-800">
          Welcome to
          <span className="italic fw-900 text-primary-400 px-8">
            SplitWise!
          </span>
        </h1>
        <p>
          Track your daily expense and split bills among friends easily and
          efficiently!
        </p>
        <Button handleClick={() => navigate("/login")}>Get Started</Button>
      </div>
    </main>
  );
};

export default Landing;
