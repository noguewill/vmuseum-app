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
  console.log(current);
  if (!Array.isArray(weeklySlides) || weeklySlides.length <= 0) {
    return null;
  }

  const bgLoad = () => {
    return (
      <div
        className={`w-screen h-screen absolute flex flex-col justify-center items-center z-40 ${
          startTheme ? "" : "hidden"
        }`}
      >
        <div className="w-auto self-center z-10 ">
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
        className=" absolute w-full h-full object-cover z-10 "
      />

      {bgLoad()}

      <NavBar
        timer={"hidden"}
        navColor={`${xpoThemes[theme].themeHomeNavbarColor}`}
        textColor={`${xpoThemes[theme].themeHomeNavbarColor}`}
        xpoThemes={xpoThemes}
        theme={theme}
      />
      <div
        className={`flex  h-screen items-center   ${
          startTheme ? "invisible" : "visible"
        }`}
      >
        <div className="z-10 w-5/12 h-full flex flex-col justify-around items-center">
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
                  {/* Show if locked === false else don't */}

                  <WeeklyData
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                    cStyle={`
                      md:block relative  w-full h-full object-none hidden z-20 opacity-0 ${
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
