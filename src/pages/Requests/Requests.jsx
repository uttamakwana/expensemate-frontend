/* eslint-disable react/prop-types */
import "./requests.css";

const Requests = ({ user, navigate }) => {
  const requests = user.friendRequests;

  if (requests.length === 0) {
    return (
      <div className="p-1 bg-white-800 oval">
        <p className="fs-body fw-600 text-center clr-primary-900 ">
          No friend request found!
        </p>
        <button
          className="block margin-inline-auto bg-primary-400 text-white-900 fs-button fw-600 oval px-1 py-8 border-none outline-none my-1"
          onClick={() => navigate("/dashboard")}
        >
          Go to Home!
        </button>
      </div>
    );
  }
  return <div>Requests</div>;
};

export default Requests;
