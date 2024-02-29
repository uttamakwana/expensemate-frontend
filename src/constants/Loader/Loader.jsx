/* eslint-disable react/prop-types */
import "./loader.css";

const Loader = ({ width, height }) => {
  return (
    <div className="flex-center flex-col">
      <div className="spinner" style={{ width, height }}></div>
      <p className="mt-4 fs-body">Loading...</p>
    </div>
  );
};

export default Loader;
