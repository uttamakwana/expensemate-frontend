/* eslint-disable react/prop-types */
const MainLogo = () => {
  return (
    <div className="flex-col flex-center">
      <h1 className="big-logo-heading | text-black-900">
        Split<span className="italic text-primary-400 ">Wise</span>
      </h1>
      <p
        className="py-4 px-8 oval bg-primary-400 text-white-900 flex-center"
        style={{ fontSize: "12px", width: "max-content" }}
      >
        &quot;Track, Split & Simplify&quot;
      </p>
    </div>
  );
};

export default MainLogo;
