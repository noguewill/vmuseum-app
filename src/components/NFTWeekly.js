import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WeeklyData from "./WeeklyData";
import React from "react";
import xpoThemes from "./themeData";

const NFTWeekly = ({ hours, minutes, seconds, theme }) => {
  const [current, setCurrent] = useState(0);

  const [startTheme, setStartTheme] = useState(true);

  useEffect(() => {
    const waitForHero = setTimeout(() => {
      setStartTheme(false);
    }, 4000);

    return () => {
      clearTimeout(waitForHero);
      setStartTheme(false);
    };
  }, []);

  const weeklySlides = [
    {
      themeData: "etherealWeeklyData",
      name: `${xpoThemes[theme].themeNFTDesc[0].nftTitle}`,
      weeklyImg: `${xpoThemes[theme].themeNFT}`,
      alt: "Aurora's NFT named \"Narcissus 2.0",
      locked: false,
    },
    {
      name: "DAY 2",
      weeklyImg: `${xpoThemes[theme].themePlaceHolderNFT}`,
      alt: "Aurora's NFT named \"Narcissus 2.0",
      locked: true,
    },
    {
      name: "DAY 3",
      weeklyImg: `${xpoThemes[theme].themePlaceHolderNFT}`,
      locked: true,
    },
    {
      name: "DAY 4",
      weeklyImg: `${xpoThemes[theme].themePlaceHolderNFT}`,
      locked: true,
    },
    {
      name: "DAY 5",
      weeklyImg: `${xpoThemes[theme].themePlaceHolderNFT}`,
      locked: true,
    },
    {
      name: "DAY 6",
      weeklyImg: `${xpoThemes[theme].themePlaceHolderNFT}`,
      locked: true,
    },
    {
      name: "DAY 7",
      weeklyImg: `${xpoThemes[theme].themePlaceHolderNFT}`,
      locked: true,
    },
  ];

  const length = weeklySlides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 2 ? 0 : current + 1);
  };

  if (!Array.isArray(weeklySlides) || weeklySlides.length <= 0) {
    return null;
  }

  const bgLoad = () => {
    return (
      <div
        className={`w-screen h-screen absolute flex flex-col justify-center items-center  ${
          startTheme ? "" : "hidden"
        }`}
      >
        <div className="w-auto self-center  ">
          <h1 className="text-3xl ml-1 text-white font-light themeItem opacity-0">
            week
            <b className={`text-yellow-400 ml-1`}>
              {xpoThemes[theme].themeNFTWeeklyNum}
            </b>
          </h1>
          <h1
            className={`2xl:text-9xl lg:text-8xl
    text-6xl font-semibold  text-white text-center tracking-widest ${xpoThemes[theme].themeStrokeColor} themeHeader opacity-0 `}
          >
            {xpoThemes[theme].themeName}
          </h1>
        </div>
      </div>
    );
  };
  return (
    <>
      <img
        src={xpoThemes[theme].themeBG}
        alt="ye"
        className=" absolute w-full h-full object-cover  "
      />

      {bgLoad()}

      <NavBar
        timer={"hidden"}
        navColor={`${xpoThemes[theme].themeHomeNavbarColor}`}
        textColor={`${xpoThemes[theme].themeHomeNavbarColor}`}
        xpoThemes={xpoThemes}
        theme={theme}
      />
      {/* Mobile Weekly */}
      <div className="w-full h-full flex flex-col justify-between  lg:hidden mb-96">
        {/* Mobile navbar container */}
        <div className="w-full h-24"></div>
        {/* end of navbar */}

        <div className="w-full h-full flex justify-center items-center  mb-48 ">
          <div className="w-11/12 h-full ">
            {/* Main container for NFT */}
            <div className=" w-11/12 h-5/6 absolute flex justify-center">
              <div>
                {weeklySlides.map((_, index) => {
                  return (
                    <React.Fragment key={index}>
                      {index === current && (
                        <>
                          <WeeklyData
                            hours={hours}
                            minutes={minutes}
                            seconds={seconds}
                            cStyle={`
                        object-none w-full h-full opacity-0 ${
                          !startTheme ? "themeItem" : ""
                        } ${
                              !weeklySlides[current].locked
                                ? "imageEl"
                                : "filter blur-sm"
                            }
                    `}
                            weeklySlides={weeklySlides}
                            current={current}
                          />
                        </>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
              <div className=" w-11/12 h-full absolute  flex flex-col items-center justify-center">
                {/* Main UI container */}

                {/* Start of button */}
                <div
                  className={` w-auto  flex self-start flex-col lg:ml-2 mt-5  opacity-0 z-10 ${
                    !startTheme ? "themeItem" : ""
                  }`}
                >
                  {weeklySlides[current].locked ? (
                    <h1
                      className={` font-light text-black  text-4xl ml-5 menuItem opacity-0 z-10 ${
                        !startTheme ? "themeItem" : ""
                      }`}
                    >
                      Coming Soon...
                    </h1>
                  ) : (
                    <>
                      <h1
                        className={`2xl:text-6xl lg:text-5xl text-4xl font-extralight max-w-sm  text-${xpoThemes[theme].themeNFTODTitleColor}`}
                      >
                        {xpoThemes[theme].themeNFTDesc[0].nftTitle}
                      </h1>
                      <div className="  flex  items-center lg:mt-2">
                        <h4
                          className={`2xl:text-2xl 2xl:ml-2 lg:text-lg  
               lg:mr-10 font-light text-${xpoThemes[theme].themeNFTODTitleColor} `}
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
                    </>
                  )}
                </div>

                {/* End of button */}

                {/* UI ELEMENT */}

                {/* prevSlide start*/}
                <div className="w-full h-full flex ">
                  <div
                    className={`w-1/6 h-full flex flex-col   justify-center ${
                      current === 0 ? "invisible" : "visible"
                    } items-center `}
                  >
                    <button onClick={prevSlide}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`2xl:w-16 2xl:h-16 h-10 w-10 arrowLeft `}
                        viewBox="0 0 20 20"
                        fill={"white"}
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* end of prevSlide start*/}
                  <div className="w-4/6 h-full flex flex-col self-center "></div>
                  {/* nextSlide start*/}
                  <div className="w-1/6 h-full flex flex-col justify-around items-center">
                    <div
                      className={`z-10 w-full h-full flex  flex-col justify-center items-center opacity-0 ${
                        !startTheme ? "themeItem" : ""
                      }`}
                    >
                      <button onClick={nextSlide}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="2xl:w-16 2xl:h-16 h-10 w-10 arrowRight "
                          viewBox="0 0 20 20"
                          fill={"white"}
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* end of UI */}
              </div>
            </div>
          </div>
        </div>
        {/* footer clutch */}
        <div className="w-full h-48 "></div>
      </div>
      {/* Desktop weekly */}
      <div
        className={`  h-screen items-center   lg:flex hidden ${
          startTheme ? "invisible" : "visible"
        }`}
      >
        <div className="z-10 w-5/12 h-full ml-5 flex flex-col justify-around items-center">
          <div className="w-full h-2/3 flex flex-col justify-center items-center  lg:pr-20">
            {weeklySlides[current].locked ? (
              <h1 className="lg:text-5xl font-extralight text-black lg:mt-32 2xl:px-40 lg:px-20">
                Coming Soon...
              </h1>
            ) : (
              <>
                <h1
                  className={`2xl:text-6xl lg:text-5xl text-4xl lg:mt-32 font-extralight text-center text-${
                    xpoThemes[theme].themeHomeNavbarColor
                  } opacity-0 ${!startTheme ? "themeItem" : ""}`}
                >
                  {weeklySlides[0].name}
                </h1>
                <div className=" lg:w-96  flex  items-center lg:mt-2">
                  <h4
                    className={`2xl:text-2xl 2xl:ml-2 lg:text-lg lg:ml-12 text-${
                      xpoThemes[theme].themeHomeNavbarColor
                    }
               lg:mr-10 font-light opacity-0 ${!startTheme ? "themeItem" : ""}`}
                  >
                    by
                  </h4>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://foundation.app/@aurorae"
                  >
                    <button
                      className={`flex w-auto items-center justify-center arrowContainerRight opacity-0  ${
                        !startTheme ? "themeItem" : ""
                      }`}
                    >
                      <img
                        className=" 2xl:w-72  2xl:h-20 lg:w-56 lg:h-16 lg:-mr-9 -mr-12
                    arrowContainerRight"
                        src={xpoThemes[theme].themeNFTArtistBtn}
                        alt="Artist's NFT platform redirect button"
                      />
                      <div>
                        <img
                          className="2xl:w-5 w-9/12 2xl:h-7 h-auto arrowRight "
                          src={xpoThemes[theme].themeNFTArtistBtnArrow}
                          alt="button arrow"
                        />
                      </div>
                    </button>
                  </a>
                </div>
              </>
            )}
          </div>

          <div
            className={`w-full h-1/3 flex flex-col justify-center ${
              current === 0 ? "invisible" : "visible"
            } items-center `}
          >
            <button onClick={prevSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`2xl:w-16 2xl:h-16 h-10 w-10 arrowLeft text-${xpoThemes[theme].themeNFTWeeklyArrowColor}`}
                viewBox="0 0 20 20"
                fill={`${xpoThemes[theme].themeNFTWeeklyArrowColor} `}
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <span
              className={`2xl:text-lg text-xs text-${xpoThemes[theme].themeNFTWeeklyArrowColor}`}
            >
              {current === 0
                ? weeklySlides[current].name
                : weeklySlides[current - 1].name}
            </span>
          </div>
          <div className="w-full h-2/3 "></div>
        </div>

        {weeklySlides.map((_, index) => {
          return (
            <React.Fragment key={index}>
              {index === current && (
                <>
                  <WeeklyData
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                    cStyle={`
                      lg:w-full lg:h-full w-20 h-5/6 object-none  z-20 opacity-0 ${
                        !startTheme ? "themeItem" : ""
                      } ${
                      !weeklySlides[current].locked
                        ? "imageEl"
                        : "filter blur-sm"
                    }
                    `}
                    weeklySlides={weeklySlides}
                    current={current}
                  />
                </>
              )}
            </React.Fragment>
          );
        })}

        <div
          className={`z-10 w-4/12 h-full flex flex-col justify-center items-center opacity-0 ${
            !startTheme ? "themeItem" : ""
          }`}
        >
          <button onClick={nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="2xl:w-16 2xl:h-16 h-10 w-10 arrowRight "
              viewBox="0 0 20 20"
              fill={xpoThemes[theme].themeNFTWeeklyArrowColor}
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <span
            className={`2xl:text-lg text-xs text-${xpoThemes[theme].themeNFTWeeklyArrowColor}`}
          >
            {weeklySlides[current + 1].name}
          </span>
        </div>
      </div>

      <Footer xpoThemes={xpoThemes} theme={theme} />
    </>
  );
};

export default NFTWeekly;
