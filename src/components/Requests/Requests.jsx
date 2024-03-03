/* eslint-disable react/prop-types */
import RequestCard from "./RequestCard.jsx";

const Requests = ({ client, navigate }) => {
  if (client.friendRequests.length === 0) {
    return (
      <div className="flex-col gap-8 py-1">
        <p className="text-center">No friend requests</p>
        <button
          className="btn bg-primary-400 text-white-900 fw-600 margin-inline-auto max-content"
          onClick={() => navigate("/dashboard")}
        >
          Home
        </button>
      </div>
    );
  }
  return (
    <main className="dashboard-requests py-1">
      {client.friendRequests.map((friendRequest) => (
        <RequestCard
          key={friendRequest.userID}
          friendRequest={friendRequest}
          client={client}
        />
      ))}
    </main>
  );
};

export default Requests;
