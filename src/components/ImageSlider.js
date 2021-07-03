import { useState } from "react";

import { SliderData } from "./SliderData";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <>
      <div className="md:w-1/3 w-full h-screen bg-gray-900 flex justify-center items-center">
        {/*         {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={index === current ? "slide active" : "slide"}
            >
              {index === current && (
                <img
                  className="absolute  md:w-1/3 w-full h-screen object-contain "
                  src={slide.img}
                  alt="tea"
                />
              )}
            </div>
          );
        })} */}
        <button onClick={prevSlide}>
          <svg
            className="2xl:w-14 2xl:h-14 h-10 w-10 z-20 "
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            fill="black"
          >
            <path
              d="M15 4l2 2l-6 6l6 6l-2 2l-8-8z"
              fill="#626262"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <div className="order-1  z-10 flex flex-col justify-center items-center 2xl:ml-28 ml-20">
          <button onClick={nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="2xl:w-14 2xl:h-14 h-10 w-10  "
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
          <span className="2xl:text-base text-xs">next</span>
        </div>
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  src={slide.img}
                  alt="travel "
                  className="z-10  w-full h-full object-cover "
                />
              )}
            </div>
          );
        })}
        <div className="self-end flex justify-center items-center  ">
          <h1 className="2xl:text-xl text-white font-light 2xl:mb-10 mb-2 2xl:ml-44 ml-32">
            Narcissus 2.0 pre-render
          </h1>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
