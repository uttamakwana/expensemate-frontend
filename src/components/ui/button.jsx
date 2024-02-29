/* eslint-disable react/prop-types */
const Button = ({ children, handleClick }) => {
  return (
    <button
      className="btn br-10 bg-primary-400 text-white-900 fw-600 fs-button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
