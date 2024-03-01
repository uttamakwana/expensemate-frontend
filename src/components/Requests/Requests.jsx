import { useSelector } from "react-redux";
import RequestCard from "./RequestCard.jsx";

const Requests = () => {
  const { client } = useSelector((state) => state.userReducer);

  if (client.friendRequests.length === 0) {
    return (
      <p className="p-1 text-center bg-white-900 text-black-700">
        No friend requests!
      </p>
    );
  }
  return (
    <main className="dashboard-requests-grid requests-grid responsive-grid">
      {client.friendRequests.map((friendRequest) => (
        <RequestCard key={friendRequest.userId} request={friendRequest} />
      ))}
    </main>
  );
};

export default Requests;
