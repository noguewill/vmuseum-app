import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WeeklyData from "./WeeklyData";
import React from "react";

const NFTWeekly = ({ hours, minutes, seconds }) => {
  const [current, setCurrent] = useState(0);

  /*   const [startTheme, setStartTheme] = useState(0); */
  /* 
  useEffect(() => {
    const waitForHero = setTimeout(() => {
      setStartTheme('invisible');
    }, 3000);

    return () => {
      clearTimeout(waitForHero);
      setStartTheme(false);
    };
  }, []); */
  const weeklySlides = [
    {
      themeData: "etherealWeeklyData",
      name: "Narcissus 2.0",
      weeklyImg: "../assets/Narcissus 2.0.jpg",
      alt: "Aurora's NFT named \"Narcissus 2.0",
      locked: false,
    },
    {
      name: "DAY 2",
      weeklyImg: "../assets/weeklyImgs/hive.jpg",
      alt: "Aurora's NFT named \"Narcissus 2.0",
      locked: true,
    },
    {
      name: "DAY 3",
      weeklyImg: "../assets/weeklyImgs/hive.jpg",
      locked: true,
    },
    {
      name: "DAY 4",
      weeklyImg: "../assets/weeklyImgs/hive.jpg",
      locked: true,
    },
    {
      name: "DAY 5",
      weeklyImg: "../assets/weeklyImgs/hive.jpg",
      locked: true,
    },
    {
      name: "DAY 6",
      weeklyImg: "../assets/weeklyImgs/hive.jpg",
      locked: true,
    },
    {
      name: "DAY 7",
      weeklyImg: "../assets/weeklyImgs/hive.jpg",
      locked: true,
    },
  ];
  const length = weeklySlides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(weeklySlides) || weeklySlides.length <= 0) {
    return null;
  }

  return (
    <>
      {/*  <div
        className={`${
          startTheme ? "z-0" : "z-50"
        }absolute  w-full h-screen flex justify-center items-center  `}
      >
        <div className="w-auto h-auto z-50 flex flex-col font-light tracking-widest themeHeader">
          <h2 className="2xl:ml-2 2xl:text-3xl text-gray-200 ">
            WEEK <b className="text-yellow-400 ">1</b>
          </h2>
          <h1
            className="2xl:text-9xl lg:text-8xl
          text-6xl font-semibold  text-white text-center tracking-widestxxl   etherealHeader  "
          >
            ETHEREAL
          </h1>
        </div>
      </div> */}

      <NavBar
        timer={"hidden"}
        navColor={"black"}
        textColor={"black"}
        stroke={""}
      />

      <div className="flex  h-screen items-center noScrollBar ">
        <div className="z-10 w-4/12 h-full flex flex-col justify-around items-center">
          <div className="w-full h-2/3 flex flex-col justify-center items-center  ">
            <h1 className="2xl:text-6xl lg:text-5xl text-4xl lg:mt-32 font-extralight menuItemDisplay">
              Narcissus 2.0
            </h1>
            <div className=" lg:w-96  flex  items-center lg:mt-2">
              <h4
                className="2xl:text-2xl 2xl:ml-2 lg:text-lg lg:ml-10 
               lg:mr-10 font-light"
              >
                by
              </h4>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://foundation.app/@aurorae"
              >
                <button
                  className=" border-yellow-400 2xl:border-4  lg:border-3 border-2 pl-3 p-1 text-yellow-400  bg-gray-100
    2xl:text-4xl lg:text-3xl text-lg flex items-center justify-between font-light"
                >
                  Aurorae
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="2xl:w-12  w-5 2xl:h-12 h-5"
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

            {/* <h1 className="lg:text-5xl text-black">Coming Soon...</h1> */}
          </div>
          <div
            className={`w-full h-1/3 flex flex-col justify-center ${
              current === 0 ? "invisible" : "visible"
            } items-center `}
          >
            <button onClick={prevSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="2xl:w-16 2xl:h-16 h-10 w-10  "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <span className="2xl:text-lg text-xs">
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

                  <img
                    src="../assets/etherealBG.jpg"
                    alt={weeklySlides[current].weeklyImg.alt}
                    className="md:block absolute w-full h-full object-cover hidden "
                  />

                  <WeeklyData
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                    cStyle={`
                      md:block relative  w-full h-full object-none hidden ${
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

        <div className="z-10 w-4/12 h-full flex flex-col justify-center items-center">
          <button onClick={nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="2xl:w-16 2xl:h-16 h-10 w-10  "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <span className="2xl:text-lg text-xs">
            {weeklySlides[current + 1].name}
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NFTWeekly;
