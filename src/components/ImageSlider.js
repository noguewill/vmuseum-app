import { useState } from "react";
import React from "react";
import xpoThemes from "./themeData";
import RightArrow from "./icons/RightArrow";

const ImageSlider = ({ theme }) => {
  const [current, setCurrent] = useState(0);
  const length = xpoThemes[theme].nftAssets.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (
    !Array.isArray(xpoThemes[theme].nftAssets) ||
    xpoThemes[theme].nftAssets.length <= 0
  ) {
    return null;
  }
  const carouselDot = () => {
    return [...Array(length)].map((_, i) => (
      <div
        key={i}
        className={`${
          current === i ? `bg-yellow-400` : " "
        } rounded-full bg-red-100 lg:mx-1 w-2 h-2`}
      ></div>
    ));
  };

  return (
    <>
      {/*   <div className="md:w-1/3 w-full h-screen bg-gray-900 flex justify-center items-center"> */}
      <div className={`bg-black  w-full h-auto flex flex-col `}>
        <div className=" flex">
          <div className=" z-10 flex flex-col justify-center items-center ">
            <button onClick={prevSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="2xl:w-14 2xl:h-14 h-10 w-10 z-10 arrowLeft"
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
          </div>
          <div className="order-1 z-10 flex flex-col justify-center items-center ">
            <button onClick={nextSlide}>
              <RightArrow />
            </button>
          </div>
          <div className="w-screen h-screen flex flex-col justify-end items-center">
            <div className="w-full flex justify-center items-center  ">
              <h1 className="2xl:text-xl text-white font-light">
                {xpoThemes[theme].themeNFTDesc[0].nftAssetTitle[current]}
              </h1>
            </div>
            <div className="2xl:w-1/12 flex justify-between mb-4">
              {carouselDot()}
            </div>
          </div>
          {xpoThemes[theme].nftAssets.map((slide, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className={`${
                    index === current ? "block" : ""
                  } absolute md:w-1/3 w-full h-full`}
                >
                  <div
                    className={`${
                      index === current ? "slide active" : "slide "
                    } `}
                    key={index}
                  >
                    {index === current && (
                      <img
                        loading="lazy"
                        src={slide.img}
                        alt="travel "
                        className="z-10  w-full h-screen object-contain "
                      />
                    )}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
