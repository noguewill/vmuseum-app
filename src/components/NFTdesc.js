import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import NFTDescIconContainer from "./NFTDescIconContainer";
import Footer from "./Footer";
import Foundation from "./icons/Foundation";
import ImageSlider from "./ImageSlider";

import xpoThemes from "./themeData";
const NFTdesc = ({ theme }) => {
  return (
    <>
      <div
        id="NFTdesc"
        className={`w-full flex flex-col lg:flex-row  font-medium  xs:items-center text-${xpoThemes[theme].themeNFTParaColor} bg-${xpoThemes[theme].themeNFTDescBGColor}`}
      >
        {/* left sidebar */}
        <div
          className="2xl:justify-around
        md:w-1/3 w-full flex flex-col px-5 pt-10 justify-between items-center  "
        >
          <div className="lg:ml-0  self-center">
            <img
              className="lg:mb-3 mb-4 lg:w-60 lg:h-auto w-52"
              src={`${xpoThemes[theme].themeNFTDesc[0].descTitle}`}
              alt=""
            />

            <p className="2xl:text-xl lg:text-sm 2xl:max-w-lg lg:max-w-sm text-base lg:mb-0 mb-10 max-w-md">
              <i>{`${xpoThemes[theme].themeNFTDesc[0].desc}`}</i>
            </p>
          </div>
          <div className="ml-5 lg:ml-0 lg:mb-0 mb-10">
            <img
              className="lg:mb-3 mb-4 lg:w-80 lg:h-auto  w-64"
              src={`${xpoThemes[theme].themeNFTDesc[0].storyBehindTitle} `}
              alt=""
            />
            <p className="2xl:text-xl lg:text-sm 2xl:max-w-lg lg:max-w-sm  max-w-md">
              {`${xpoThemes[theme].themeNFTDesc[0].story}`}
            </p>
          </div>
          <div className="w-12/12 flex flex-col items-center mb-20">
            <img
              className="lg:mb-5  mb-10 lg:w-24 lg:h-9 w-20 h-5"
              src={xpoThemes[theme].themeNFTDesc[0].toolsTitle}
              alt=""
            />
            <NFTDescIconContainer theme={theme} />
          </div>
        </div>

        {/* asset carousel */}
        <div className="lg:w-1/3 lg:h-5/6  flex flex-col pt-10 justify-center items-center">
          <ImageSlider theme={theme} />
        </div>

        {/* right sidebar */}
        <div className="md:w-1/3 w-full flex flex-col pl-7 pt-10  2xl:justify-around justify-between items-center">
          <div className="lg:mb-0 mb-10">
            <img
              className="lg:mb-3 lg:w-44 lg:h-auto w-40 mb-4"
              src={`${xpoThemes[theme].themeNFTDesc[0].mythTitle}`}
              alt=""
            />
            <p className="2xl:text-xl lg:text-sm 2xl:max-w-lg lg:max-w-sm  max-w-md ">
              {`${xpoThemes[theme].themeNFTDesc[0].myth}`}
            </p>
          </div>
          <div className="w-8/12   h-auto flex flex-col items-center max-w-md xl:py-0 bg-gray-700  ">
            <div className=" w-full flex items-center max-w-xs justify-between ">
              <h1
                className={`2xl:text-3xl  text-3xl lg:mb-2  text-${xpoThemes[theme].themeNFTDescIconHeaderColor}`}
              >
                FIND
              </h1>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://linktr.ee/Aurorae_"
              >
                <img
                  className="lg:w-36 lg:h-auto w-40 h-6 lg:mb-0  mb-1"
                  src={xpoThemes[theme].themeNFTDesc[0].artistNameTitle}
                  alt=""
                />
              </a>
              <h1
                className={`2xl:text-3xl text-3xl  lg:mb-2 text-${xpoThemes[theme].themeNFTDescIconHeaderColor}`}
              >
                ON
              </h1>
            </div>
            <div className=" w-full h-full  max-w-xs flex lg:justify-between md:justify-around justify-between items-center ">
              <a href="https://foundation.app/aurorae">
                <Foundation
                  iconSize={"2xl:w-20 lg:w-14 2xl:h-20 lg:h-14 w-14 h-auto "}
                />
              </a>

              <a href="https://twitter.com/aurorae_art">
                <Twitter
                  color={xpoThemes[theme].themeNFTDescSocialColor}
                  iconSize={"2xl:w-10 lg:w-8 2xl:h-10 lg:h-8 w-14 h-7"}
                />
              </a>

              <a href="https://www.instagram.com/aurorae.___/">
                <Instagram
                  color={xpoThemes[theme].themeNFTDescSocialColor}
                  iconSize={"2xl:w-10 lg:w-8 2xl:h-10 lg:h-8 w-14 h-7"}
                />
              </a>

              <a href="https://rarible.com/aurorae">
                <img
                  className="2xl:w-10 lg:w-8 2xl:h-10 lg:h-8 w-7 "
                  src="../assets/raribleLogo.png"
                  alt="q"
                />
              </a>
            </div>
          </div>

          <div className="lg:w-40 lg:h-20 w-48 h-56  mb-10 self-center flex justify-center items-center lg:mr-0 lg:mt-0 mt-20 mr-6">
            <img
              src={xpoThemes[theme].themeNFTDesc[0].signature}
              alt="Artist signature"
            />
          </div>
          <i className="-mt-20 2xl:mb-12 lg:mb-10">
            {xpoThemes[theme].themeNFTDesc[0].artistName}'s Signature
          </i>
        </div>
      </div>
      <Footer xpoThemes={xpoThemes} theme={theme} />
    </>
  );
};

export default NFTdesc;
