import { Link } from "react-router-dom";
const NFTWeekly = ({ nftid }) => {
  return (
    <>
      <Link to={`/${nftid}`}>
        <div>I'M A NFT</div>
      </Link>
    </>
  );
};

export default NFTWeekly;
