import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WeeklyData from "./WeeklyData";
import React from "react";

const NFTWeekly = () => {
  const [current, setCurrent] = useState(0);
  const [currentScale, setCurrentScale] = useState("object-none");
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

  /*   const changeScale = () => {
    return "object-cover";
  };
  const changeScaleAgain = () => {
    return "object-none";
  }; */
  return (
    <>
      <NavBar
        timer={"hidden"}
        navColor={"black"}
        textColor={"black"}
        stroke={""}
      />

      <div className="flex  h-screen items-center ">
        <div className=" lg:w-3/6 w-auto h-3/6 flex flex-col justify-around items-center z-10 px-10 ">
          {/* NFT title element */}
          <div className="self-start">
            <div className=" w-auto flex flex-col ml-2">
              <h1 className="2xl:text-6xl text-4xl ">Narcissus 2.0</h1>
            </div>
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
          {/*  Left Arrow element */}
          <div
            className={`z-10  flex flex-col items-center 2xl:mb-44 lg:mb-32 ${
              current === 0 ? "invisible" : ""
            }`}
          >
            <button onClick={prevSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="2xl:w-20 2xl:h-20 h-10 w-10  "
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
                    className="absolute w-full h-full object-cover lg:filter lg:blur-sm"
                  />
                  <WeeklyData
                    cStyle={
                      "md:block relative  w-4/5 h-full object-none hidden "
                    }
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
          </button>
          <span className="2xl:text-lg text-xs">
            {" "}
            {current === 0
              ? weeklySlides[current + 1].name
              : weeklySlides[current + 1].name}
          </span>
        </div>
      </div>
      <div className="container">
        <div className="imgContainer overflow-hidden">
          <div className="imageEl">
            {/*           <img
    
            className={`w-full h-screen absolute ${currentScale} bg-center  bg-cover`}
            src="../assets/etherealBG.jpg"
            alt=""
          /> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NFTWeekly;
