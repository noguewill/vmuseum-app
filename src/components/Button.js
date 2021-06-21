import { Link } from "react-router-dom";
const Button = ({ bgImg }) => {
  return (
    <div
      className=" lg:justify-center lg:mb-0
     w-full flex  justify-around mb-20  "
    >
      <Link to="/nftoftheday">
        <button className="lg:mr-96 md:mrlg:mb-10 flex flex-col justify-center items-center">
          <div
            className="lg:w-72  lg:h-52 lg:bg-white lg:border-none
        absolute w-32 h-28 rounded  border-2 border-white"
          >
            <img
              className="absolute w-full h-full object-cover  rounded-md p-1"
              src={
                "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              }
              alt=""
            />
          </div>
          <h2
            className="absolute lg:text-3xl lg:mb-32 
             z-10 text-lg lg:block text-white text-center  hidden"
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
            className="lg:w-72 lg:h-52 lg:bg-white lg:border-none
        absolute w-32 h-28 rounded  border-2 border-white"
          >
            <img
              className="absolute w-full h-full object-cover  rounded-md p-1"
              src={
                "https://images.unsplash.com/photo-1600463046472-73e1ebaf460a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              }
              alt=""
            />
          </div>

          <h2
            className="absolute lg:text-3xl lg:mb-32 z-10 text-lg lg:block 
          text-white text-center full-button-text hidden"
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
