import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import NFTDescIconContainer from "./NFTDescIconContainer";
import Footer from "./Footer";
import Foundation from "./icons/Foundation";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
const NFTdesc = () => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row  font-medium  xs:items-center">
        {/* left sidebar */}
        <div
          className="2xl:justify-around
        md:w-1/3 w-full flex flex-col px-5 pt-10 justify-between items-center  "
        >
          <div>
            <h1 className="2xl:text-5xl lg:text-3xl  lg:mb-2 headlineGradient">
              DESCRIPTION
            </h1>
            <p className="2xl:text-xl lg:text-sm 2xl:max-w-lg lg:max-w-sm">
              <i>
                "Her own reflection was irresistible, she slowly came closer
                staring at that pure incarnation of beauty. But she was too
                close and ended up losing herself in that beautiful reflection".
              </i>
            </p>
          </div>
          <div>
            <h1 className="2xl:text-5xl lg:text-3xl lg:mb-2 headlineGradient">
              STORY BEHIND IT
            </h1>
            <p className="2xl:text-xl lg:text-sm 2xl:max-w-lg lg:max-w-sm ">
              For the realization of Narcissus 2.0, i found inspiration in the
              Greek myth of Narcissus,
              <br className="2xl:hidden block" /> i decided to reinterprate in a
              modern way and
              <br /> with a female character.
            </p>
          </div>
          <div className="w-12/12 flex flex-col items-center mb-20">
            <h1 className="2xl:text-5xl lg:text-3xl lg:mb-2 headlineGradient">
              TOOLS
            </h1>
            <NFTDescIconContainer />
          </div>
        </div>

        {/* asset carousel */}
        <div className="w-1/3  flex flex-col pt-10 justify-center items-center">
          <ImageSlider slides={SliderData} />
        </div>

        {/* right sidebar */}
        <div className="md:w-1/3 w-full flex flex-col pl-7 pt-10  2xl:justify-around justify-between items-center">
          <div>
            <h1 className="2xl:text-5xl lg:text-3xl  lg:mb-2 headlineGradient">
              THE MYTH
            </h1>
            <p className="2xl:text-xl lg:text-sm 2xl:max-w-lg lg:max-w-sm  ">
              In Greek mythology, <b>Narcissus</b> was a hunter from Thespiae in
              Boeotia who was known <br />
              for his beauty.
              <br />
              He rejected all romantic advances, eventually falling in love with
              his own reflection in a pool of water, staring at it for the
              remainder of his life. After he died, in his place sprouted a
              <b> flower</b> bearing his name.
            </p>
          </div>
          <div className="w-8/12   h-auto flex flex-col items-center max-w-md xl:py-0  ">
            <h1 className="2xl:text-5xl lg:text-3xl lg:mb-2">
              FIND
              <a
                target="_blank"
                rel="noreferrer"
                href="https://linktr.ee/Aurorae_"
              >
                <span className="headlineGradient">aurorae</span>
              </a>
              ON
            </h1>
            <div className="w-full h-full flex justify-between items-center ">
              <div className=" w-50 h-16 flex flex-col justify-center items-center">
                <a
                  className="2xl:mt-10 lg:mb-2"
                  href="https://foundation.app/aurorae"
                >
                  <Foundation iconSize={"2xl:w-20 lg:w-14 2xl:h-20 lg:h-14"} />
                </a>
              </div>
              <div className=" w-50 h-16 flex flex-col justify-center items-center">
                <a
                  className="2xl:mt-10 lg:mb-2"
                  href="https://twitter.com/aurorae_art"
                >
                  <Twitter
                    color={"gold"}
                    iconSize={"2xl:w-10 lg:w-8 2xl:h-10 lg:h-8"}
                  />
                </a>
              </div>

              <div className=" w-50 h-16 flex flex-col justify-center items-center">
                <a
                  className="2xl:mt-10 lg:mb-2"
                  href="https://www.instagram.com/aurorae.___/"
                >
                  <Instagram
                    color={"gold"}
                    iconSize={"2xl:w-10 lg:w-8 2xl:h-10 lg:h-8"}
                  />
                </a>
              </div>
              <div className=" w-50 h-16 flex flex-col justify-center items-center">
                <a
                  className="2xl:mt-10 lg:mb-2"
                  href="https://rarible.com/aurorae"
                >
                  <img
                    className="2xl:w-10 lg:w-8 2xl:h-10 lg:h-8"
                    src="../assets/raribleLogo.png"
                    alt="q"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="w-72 h-56  mb-10 self-center">
            <svg
              className="absolute w-56 h-56 object-cover"
              viewBox="0 0 293 222"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M110.373 49.7766C110.522 63.5248 115.2 82.9113 110.275 95.9499C99.7687 123.76 54.0322 131.082 30.1358 119.48C2.3988 106.013 -4.84991 65.9415 8.47664 40.2269C20.208 17.5903 56.2325 -7.91182 82.8068 5.37536C103.637 15.7905 112.513 51.7703 123.172 70.4512C130.677 83.6058 161.154 133.995 173.381 98.2143C183.579 68.3749 184.802 34.2631 184.802 2.9141C184.802 -4.92519 184.802 5.32221 184.802 7.24592"
                stroke="#FBCC45"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M149.359 9.01807C148.769 32.6202 146.932 56.4163 148.375 80.4932C150.351 113.468 151.131 146.21 151.131 179.239C151.131 193.693 153.23 200.875 137.151 200.406C125.469 200.065 113.913 198.056 102.497 195.68C91.2277 193.336 72.6356 191.375 64.9869 181.11C48.0515 158.381 70.253 133.469 91.8639 126.962C129.462 115.64 147.923 142.507 177.713 159.057C187.941 164.739 197.927 166.958 209.611 165.161C218.047 163.863 230.471 160.195 237.571 155.316C263.823 137.274 232.893 154.086 253.914 133.066"
                stroke="#FBCC45"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M253.914 5.47394C249.761 17.6888 248.598 30.3624 246.629 43.0821C241.7 74.9268 236.567 106.863 226.644 137.595C217.905 164.657 207.618 191.878 202.523 219.899"
                stroke="#FBCC45"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M291.128 1.92969C283.726 45.1077 260.941 82.3691 250.468 124.698C244.139 150.28 235.488 174.267 225.56 198.634"
                stroke="#FBCC45"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <i className="-mt-20">Aurora's Signature</i>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NFTdesc;
