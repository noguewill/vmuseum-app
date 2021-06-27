import NFTdesc from "./NFTdesc";
import ScrollUp from "./icons/ScrollUp";
import NavBar from "./NavBar";

const NFTday = () => {
  return (
    <>
      <NavBar
        timer={"hidden"}
        navColor={"black"}
        textColor={"black"}
        stroke={""}
      />
      <div className="flex lg:justify-start  justify-center">
        <img
          className="absolute w-full h-full object-cover lg:filter lg:blur-sm "
          src="../assets/Narcissus 2.0.jpg"
          alt="ethereal background"
        />

        <img
          className="lg:block left-80 absolute w-3/6 h-full object-contain hidden"
          src="../assets/Narcissus 2.0.jpg"
          alt="ethereal background"
        />
        <div className=" lg:w-3/6 lg:ml-5  w-full h-screen flex  items-center z-10">
          <div className=" w-auto mb-40 flex flex-col ml-2">
            <h1 className="text-4xl">Narcissus 2.0</h1>
            <div className="w-3/5  flex justify-between items-center">
              <h4 className="font-medium">by</h4>
              <a target="_blank" href="https://foundation.app/@aurorae">
                <button
                  className=" border-yellow-400 border-2 p-0.5 text-yellow-400 bg-white
                text-lg flex items-center justify-between"
                >
                  Aurorae{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
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
      </div>
      <div className="w-full h-8 bg-black text-white flex px-5 justify-between items-center z-10">
        <div className="w-auto flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              d="M15.927 23.959l-9.823-5.797l9.817 13.839l9.828-13.839l-9.828 5.797zM16.073 0L6.254 16.297l9.819 5.807l9.823-5.801z"
              fill="rgba(251, 191, 36)"
            />
          </svg>
          <h3>
            Price
            <span className="text-yellow-400"> 0.31 WETH</span>
            <span className="font-light">($700.00)</span>
          </h3>
        </div>
        <div className="flex items-center ">
          <h3 className="mr-2">scroll</h3>
          <svg
            className="text-white"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <NFTdesc />
    </>
  );
};

export default NFTday;
