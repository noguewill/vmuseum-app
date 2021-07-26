import NFTdesc from "./NFTdesc";
import { Link as Scroll } from "react-scroll";
import NavBar from "./NavBar";
import xpoThemes from "./themeData";

const NFTday = ({ theme }) => {
  console.log(xpoThemes[theme].themeNFTArtistBtnArrow);
  return (
    <>
      <NavBar
        timer={"hidden"}
        navColor={`${xpoThemes[theme].themeNFTODNavColor}`}
        textColor={"black"}
        xpoThemes={xpoThemes}
        theme={theme}
      />
      <div className="flex lg:justify-start  justify-center items-center ">
        <img
          className="absolute w-full h-full object-cover lg:filter lg:blur-sm  opacity-90"
          src={xpoThemes[theme].themeNFT}
          alt="ethereal background"
        />

        <img
          className="md:block left-80 absolute 2xl:w-4/6  lg:w-3/6 h-full object-contain hidden"
          src={xpoThemes[theme].themeNFT}
          alt="ethereal background"
        />
        <div className=" lg:w-3/6 lg:ml-5  w-full h-screen flex  items-center z-10">
          <div className=" w-auto lg:mb-40 flex flex-col lg:ml-2  ml-5 mb-72">
            <h1
              className={`2xl:text-6xl lg:text-5xl text-4xl font-light max-w-sm  text-${xpoThemes[theme].themeNFTODTitleColor}`}
            >
              {xpoThemes[theme].themeNFTDesc[0].nftTitle}
            </h1>
            <div className=" lg:w-96  flex  items-center lg:mt-2">
              <h4
                className={`2xl:text-2xl 2xl:ml-2 lg:text-lg  
               lg:mr-10 font-light text-${xpoThemes[theme].themeNFTODTitleColor}`}
              >
                by
              </h4>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://foundation.app/@aurorae"
              >
                <button
                  className={`flex w-auto items-center justify-center arrowContainerRight `}
                >
                  <img
                    className=" 2xl:w-72 2xl:h-20 lg:w-56 lg:h-16 w-40 h-12 lg:-mr-9 -mr-12
                    arrowContainerRight"
                    src={xpoThemes[theme].themeNFTArtistBtn}
                    alt="Artist's NFT platform redirect button"
                  />
                  <div>
                    <img
                      className="2xl:w-5 lg:w-9/12 2xl:h-7 lg:h-auto lg:ml-0 w-3 h-4 ml-6 arrowRight "
                      src={xpoThemes[theme].themeNFTArtistBtnArrow}
                      alt="button arrow"
                    />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full 2xl:h-12 h-8 bg-black text-${xpoThemes[theme].themeNFTODPriceColor} flex lg:px-5  px-2 justify-between items-center z-10 2xl:text-xl`}
      >
        <div className="w-auto flex items-center">
          <svg
            className="2xl:w-6 2xl:h-6 w-5 h-5 "
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              d="M15.927 23.959l-9.823-5.797l9.817 13.839l9.828-13.839l-9.828 5.797zM16.073 0L6.254 16.297l9.819 5.807l9.823-5.801z"
              fill={xpoThemes[theme].themeNFTODCryptoIconColor}
            />
          </svg>
          <h3 className="lg:text-base text-sm">
            Price
            <span className={`ml-1 text-yellow-400 lg:text-base text-sm`}>
              {xpoThemes[theme].themeNFTPriceCrypto}
            </span>
            <span className="font-light">
              {xpoThemes[theme].themeNFTPriceDollar}
            </span>
          </h3>
        </div>
        <div className="flex items-center ">
          <Scroll
            className="w-full flex items-center justify-around arrowContainerDown cursor-pointer"
            to="NFTdesc"
            spy={true}
            smooth={true}
          >
            <h3
              className={`mr-2 text-${xpoThemes[theme].themeNFTODScrollColor} `}
            >
              scroll to<b> description</b>
            </h3>
            <svg
              className={` arrowDown`}
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
                fill={xpoThemes[theme].themeNFTODScrollColor}
              />
            </svg>
          </Scroll>
        </div>
      </div>
      <NFTdesc xpoThemes={xpoThemes} theme={theme} />
    </>
  );
};

export default NFTday;
