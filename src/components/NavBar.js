import { useState } from "react";
import Logo from "./icons/Logo";
import Twitter from "./icons/Twitter";
import Instagram from "./icons/Instagram";
import Menu from "./Menu";

const NavBar = ({ timer, navColor, strokeTheme, logoColor }) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <div className="flex flex-col">
        <div
          className={`${
            !menuActive ? "invisible" : ""
          } absolute w-80 h-full flex flex-col  bg-gray-300  z-20 self-end fullscreen`}
        >
          <ul className=" flex flex-col pt-40  justify-around items-center ">
            <Menu />
          </ul>
        </div>
      </div>

      {/* NAV */}
      <nav className="w-full flex justify-between items-center absolute z-30 px-3 mt-5">
        <div className=" w-30">
          <button className="block w-full h-full cursor-pointer ">
            <Logo logoColor={logoColor} stroke={strokeTheme} margin={"ml-3"} />
          </button>
        </div>
        <div
          className={`lg:ml-24 flex flex-col items-center  w-auto ${timer} ${navColor} text-white`}
        >
          {/* When less than 1280px */}
          <h6 className="text-sm short-text block">NEXT NFT</h6>
          <h4 className="text-xl font-light short-text ">
            <b>22</b>H <b>16</b>M
          </h4>
          {/* 1280px or higher */}
          <h2 className="text-2xl font-medium tracking-widestxl full-text ">
            TIME UNTIL NEXT NFT DROP: <b>22</b>h <b>16</b>m <b>22</b>s
          </h2>
        </div>
        <ul>
          {/* Social Media icons */}
          <div className=" lg:w-40 w-10 h-20 flex justify-between items-center z-30">
            <li>
              <a href="www.instagram.com/nftxpo" className="lg:block hidden">
                <Instagram color={`${navColor}`} />
              </a>
            </li>

            <li>
              <a href="www.twitter.com/nftxpo" className="lg:block hidden">
                <Twitter color={`${navColor}`} />
              </a>
            </li>

            <li>
              <button onClick={() => setMenuActive(!menuActive)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:block lg:w-10 lg:h-10 w-15 h-15 hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={`${navColor}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={`${
                      !menuActive
                        ? "M4 6h16M4 12h16M4 18h16 "
                        : " M6 18L18 6M6 6l12 12"
                    }`}
                  />
                </svg>
                {/* MOBILE */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:hidden block w-15 h-15"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={`${navColor}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={`${
                      !menuActive
                        ? "M4 6h16M4 12h16M4 18h16 "
                        : " M6 18L18 6M6 6l12 12"
                    }`}
                  />
                </svg>
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
