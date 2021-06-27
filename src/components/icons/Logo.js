import { Link } from "react-router-dom";
const Logo = ({ textColor, stroke, margin, logoColor }) => {
  return (
    <>
      <Link to="/">
        <div
          className={`lg:text-4xl flex flex-col justify-center text-2xl font-semibold text-${logoColor} ${stroke}`}
        >
          <h2 className={`-mb-3 `}>NFT</h2>
          <h2 className={`  ${margin}`}>XPO</h2>
        </div>
      </Link>
    </>
  );
};

export default Logo;
