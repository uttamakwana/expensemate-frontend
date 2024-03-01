/* eslint-disable react/prop-types */
import "./card.css";

export const CardHeading = ({ children, alignSelf = "left" }) => {
  return (
    <p
      className="card-heading px-1 py-4 fw-600 oval text-white-900"
      style={{ alignSelf }}
    >
      {children}
    </p>
  );
};

export const CardSubHeading = ({ children }) => {
  return <p className="italic fw-400 fs-small text-black-700">{children}</p>;
};

export const CardButton = ({ children, marginTop, onClick, alreadySent }) => {
  return (
    <button
      className="card-btn"
      style={{
        marginTop,
        backgroundColor: alreadySent && "var(--clr-success)",
        color: alreadySent && "var(--clr-white-900)",
        border: alreadySent && "none",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
