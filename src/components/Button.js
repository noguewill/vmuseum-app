import { Link } from "react-router-dom";
const Button = ({ xpoThemes, theme, loading }) => {
  return (
    <>
      <div className="   w-full h-full flex lg:justify-end justify-center items-center cursor-default">
        <div className=" flex z-20 w-5/6 h-88 lg:justify-around  lg:items-end justify-between">
          <Link
            to="/nftoftheday"
            className={`bg-white lg:w-4/12 w-5/12 h-full btn_hover rounded-md transition-all duration-300 ease-in-out ${
              !loading ? "menuItem1" : ""
            } `}
          >
            <button className=" w-full h-full   place-items-center items-start  grid grid-cols-1 p-1  ">
              <h1 className="text-white 2xl:text-4xl text-2xl tracking-widestxl font-bold col-start-1 col-end-1 row-start-1  row-end-1 z-10 pt-5">
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
            className={`bg-white lg:w-4/12 h-1/6 w-5/12 lg:h-full btn_hover rounded-md transition-transform ${
              !loading ? "menuItem2" : ""
            } `}
          >
            <button className=" w-full h-full   place-items-center items-start  grid grid-cols-1 p-1  menuItem2">
              <h1 className="text-white 2xl:text-4xl text-2xl tracking-widestxl font-bold col-start-1 col-end-1 row-start-1 row-end-1 z-10 pt-5">
                NFT <br className="lg:hidden block" />
                WEEKLY
              </h1>
              <div className="w-full 2xl:h-72  lg:h-52 h-44 col-start-1 col-end-1 row-start-1 ">
                <img
                  className=" w-full h-full object-fit rounded-md"
                  src={xpoThemes[theme].themeBtnNFT[1]}
                  alt=""
                />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Button;
