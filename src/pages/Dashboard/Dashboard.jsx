import { useSelector } from "react-redux";

const Dashboard = () => {
  const { client } = useSelector((state) => state.userReducer);
  return (
    <div>
      Dashboard {client.name} <img src={client.avatar} alt="avatar" />{" "}
    </div>
  );
};

export default Dashboard;
