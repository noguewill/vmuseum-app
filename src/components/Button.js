import { Link } from "react-router-dom";
const Button = ({ bgImg }) => {
  return (
    <div
      className=" lg:justify-center lg:mb-0
     w-full flex  justify-around mb-20  "
    >
      <Link to="/nftoftheday">
        <button className="lg:mr-96 md:mrlg:mb-10 flex flex-col justify-center items-center btn_hover">
          <div
            className="2xl:w-80 lg:w-72  lg:h-52 lg:bg-white lg:border-none
        absolute w-32 h-28 rounded  border-2 border-white"
          >
            <img
              className="absolute w-full h-full object-cover  rounded-md p-1"
              src={
                "https://images.unsplash.com/photo-1576502200272-341a4b8d5ebb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              }
              alt=""
            />
          </div>
          <h2
            className="absolute font-semibold lg:text-xl lg:mb-32 
             z-10 text-lg lg:block text-white text-center hidden 2xl:text-2xl lg:tracking-widestxl "
          >
            NFT OF THE DAY
          </h2>
          <h2
            className=" lg:hidden  block z-10
          text-white text-center font-medium "
          >
            NFT OF
            <br />
            THE DAY
          </h2>
        </button>
      </Link>
      <Link to="/nftweekly">
        <button
          className=" lg:mb-10
        flex flex-col justify-center items-center  "
        >
          <div
            className="2xl:w-80 lg:w-72 lg:h-52 lg:bg-white lg:border-none
        absolute w-32 h-28 rounded  border-2 border-white "
          >
            <img
              className="absolute w-full h-full object-cover  rounded-md p-1"
              src={
                "https://images.unsplash.com/photo-1601925165391-e5d6552a4e20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              }
              alt=""
            />
          </div>

          <h2
            className="absolute font-semibold lg:text-xl lg:mb-32 z-10 text-lg lg:block 
          text-white text-center full-button-text hidden 2xl:text-2xl lg:tracking-widestxl"
          >
            NFT WEEKLY
          </h2>
          <h2
            className="lg:hidden block z-10
          text-white text-center  font-medium"
          >
            NFT <br />
            WEEKLY
          </h2>
        </button>
      </Link>
    </div>
  );
};

export default Button;
