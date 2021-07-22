import { Link } from "react-router-dom";
const Button = ({ xpoThemes, theme }) => {
  return (
    <>
      <div className=" bg-pink-700  w-full h-full flex lg:justify-end justify-center items-center cursor-default">
        <div className="bg-pink-300 flex z-20 w-5/6 h-88 lg:justify-around  lg:items-end justify-between">
          <Link
            to="/nftoftheday"
            className="bg-white lg:w-4/12 w-5/12 h-full btn_hover rounded-md transition-all duration-300 ease-in-out "
          >
            <button className=" w-full h-full   place-items-center items-start  grid grid-cols-1 p-1 ">
              <h1 className="text-white 2xl:text-4xl text-3xl tracking-widestxl font-bold col-start-1 col-end-1 row-start-1 row-end-1 z-10 pt-5">
                NFT OF <br className="lg:hidden block" />
                THE DAY
              </h1>
              <div className="w-full 2xl:h-72  lg:h-52 h-44 col-start-1 col-end-1 row-start-1 ">
                <img
                  className=" w-full h-full object-fit rounded-md"
                  src={xpoThemes[theme].themeBtnNFT[0]}
                  alt=""
                />
              </div>
            </button>
          </Link>
          <Link
            to="/nftweekly"
            className=" bg-white lg:w-4/12 h-1/6 w-5/12 lg:h-full btn_hover rounded-md transition-all duration-300 ease-in-out "
          >
            <button className=" w-full h-full   place-items-center items-start  grid grid-cols-1 p-1 ">
              <h1 className="text-white 2xl:text-4xl lg:text-2xl  text-xl tracking-widestxl font-bold col-start-1 col-end-1 row-start-1 row-end-1 z-10 pt-5">
                NFT WEEKLY
              </h1>
              <div className="w-full 2xl:h-72  lg:h-52 h-44 col-start-1 col-end-1 row-start-1 row-end-1">
                <img
                  className=" w-full h-full object-cover rounded-md"
                  src={xpoThemes[theme].themeBtnNFT[1]}
                  alt=""
                />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
    /*     <div
      className=" lg:justify-center lg:mb-0
     w-full flex  justify-around mb-20  "
    >
      <Link to="/nftoftheday">
        <button className="lg:mr-96  flex flex-col justify-center items-center btn_hover">
          <div
            className=" 2xl:w-80 lg:w-72  lg:h-52 lg:bg-white lg:border-none
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
            className=" font-semibold lg:text-xl lg:mb-32 
             z-10 text-lg lg:block text-white text-center hidden 2xl:text-2xl lg:tracking-widestxl "
          >
            NFT OF THE DAY
          </h2>
          <h2
            className=" absolute lg:hidden  block z-10
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
          className=" 
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
            className="
             font-semibold lg:text-xl lg:mb-32 z-10 text-lg lg:block 
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
    </div> */
  );
};

export default Button;
