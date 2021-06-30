import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
const NFTWeekly = ({ nftid }) => {
  return (
    <>
      <NavBar
        timer={"hidden"}
        navColor={"black"}
        textColor={"black"}
        stroke={""}
      />
      <div className="flex lg:justify-start  justify-center items-center ">
        <img
          className="absolute w-full h-full object-cover lg:filter lg:blur-sm "
          src="../assets/etherealBG.jpg"
          alt="ethereal background"
        />

        <img
          className="md:block absolute  w-full h-full object-contain hidden"
          src="../assets/Narcissus 2.0.jpg"
          alt="ethereal background"
        />
        <div className=" lg:w-3/6   w-full h-screen flex  items-center z-10 px-10">
          <div className=" w-auto mb-40 flex flex-col ml-2">
            <h1 className="2xl:text-6xl text-4xl ">Narcissus 2.0</h1>
            <div className="2xl:w-3/6 w-3/5 flex justify-around items-center">
              <h4 className="2xl:text-2xl font-medium ">by</h4>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://foundation.app/@aurorae"
              >
                <button
                  className=" border-yellow-400 2xl:border-3 border-2 p-1 text-yellow-400 bg-white
                2xl:text-2xl text-lg flex items-center justify-between"
                >
                  Aurorae
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="2xl:w-7  w-5 2xl:h-7 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="h-full w-3/6"></div>
        <div className="z-10 w-2/6 h-full flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="2xl:w-20 2xl:h-20 h-10 w-10  "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="2xl:text-lg text-xs">DAY 2</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NFTWeekly;
