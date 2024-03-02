import { useSelector } from "react-redux";

const Dashboard = () => {
  const { client } = useSelector((state) => state.userReducer);
  let url;
  if (client?.avatar?.includes("googleusercontent")) {
    url = client.avatar;
  } else {
    url = `http://localhost:4000/${client.avatar}`;
  }
  return (
    <div>
      Dashboard {client.name}
      <img src={url} alt="avatar" />
    </div>
  );
};

export default Dashboard;
