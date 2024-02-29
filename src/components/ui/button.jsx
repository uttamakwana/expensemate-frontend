/* eslint-disable react/prop-types */
const Button = ({ children, handleClick, loading }) => {
  return (
    <button
      className={`btn br-10 bg-primary-400 text-white-900 fw-600 fs-button flex-center ${
        loading && "button-loading"
      }`}
      onClick={handleClick}
      disabled={loading}
    >
      {children}
    </button>
  );
};

export default Button;
