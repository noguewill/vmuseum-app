import { useState } from "react";
import { SliderData } from "./SliderData";

import RightArrow from "./icons/RightArrow";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  const carouselDot = () => {
    return [...Array(length)].map((index, i) => (
      <div key={i} className="rounded-full bg-red-100 w-2 h-2"></div>
    ));
  };

  return (
    <>
      {/*   <div className="md:w-1/3 w-full h-screen bg-gray-900 flex justify-center items-center"> */}
      <div className="bg-gray-900 w-full h-auto flex flex-col ">
        <div className=" flex">
          <div className=" z-10 flex flex-col justify-center items-center ">
            <button onClick={prevSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="2xl:w-14 2xl:h-14 h-10 w-10 z-10"
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
                Narcissus 2.0 pre-render
              </h1>
            </div>
          </div>
          {SliderData.map((slide, index) => {
            <div className="2xl:w-1/12 flex justify-between mb-4">
              {carouselDot(index)}
            </div>;
            return (
              <div
                className={`${
                  index === current ? "block" : "hidden"
                } absolute md:w-1/3 w-full h-full`}
              >
                <div
                  className={`${
                    index === current ? "slide active block" : "slide hidden"
                  } `}
                  key={index}
                >
                  {index === current && (
                    <img
                      src={slide.img}
                      alt="travel "
                      className="z-10  w-full h-screen object-contain "
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
