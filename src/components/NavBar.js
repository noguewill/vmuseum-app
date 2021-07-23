import { useState, useEffect } from "react";

import Twitter from "./icons/Twitter";
import Instagram from "./icons/Instagram";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const NavBar = ({
  timer,
  navColor,
  strokeTheme,
  logoColor,
  xpoThemes,
  theme,
}) => {
  const [menuActive, setMenuActive] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setseconds] = useState(0);

  useEffect(() => {
    countdownTimeStart();
  }, []);
  function countdownTimeStart() {
    var today = new Date();
    var dayOfMonth = today.getUTCDate() + 1;
    const countDownDate = new Date(
      `july ${dayOfMonth}, 2021 15:00:00`
    ).getTime();

    // Update the count down every 1 second
    setInterval(function () {
      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now an the count down date
      /* const distance = countDownDate - now; */
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"

      setHours(hours);
      setMinutes(minutes);
      setseconds(seconds);

      // If the count down is over, write some text
      if (distance === 0) {
        setHours(hours);
        setMinutes(minutes);
        setseconds(seconds);
        dayOfMonth++;
      }
    }, 1000);
  }

  return (
    <>
      <div className="flex flex-col ">
        <div
          className={`${
            !menuActive ? "hidden" : ""
          } absolute h-screen overflow-hidden flex flex-col  bg-${
            xpoThemes[theme].themeMenuBGColor
          } bg-opacity-70 z-20 self-end fullscreen 2xl:text-xl menuOpenAnim  `}
        >
          <ul className=" flex flex-col pt-40  justify-around items-center ">
            <Menu xpoThemes={xpoThemes} theme={theme} />
          </ul>
        </div>
      </div>

      {/* NAV */}
      <nav className="w-full flex justify-between items-center absolute z-30 2xl:px-10 px-3 mt-5 lg:px-8">
        <div className=" w-30">
          <button className="block w-full h-full cursor-pointer">
            <Link to="/">
              <div
                className={`lg:text-4xl flex flex-col justify-center text-2xl font-semibold menuItem text-${logoColor} ${strokeTheme}`}
              >
                <h2 className={`-mb-3 `}>NFT</h2>
                <h2>XPO</h2>
              </div>
            </Link>
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
          <h2 className="2xl:text-2xl lg:text-xl font-semibold tracking-widestxxl full-text  ">
            TIME UNTIL NEXT NFT DROP: <b>{hours}</b>h <b>{minutes}</b>m{" "}
            <b>{seconds}</b>s
          </h2>
        </div>
        <ul>
          {/* Social Media icons */}
          <div className=" lg:w-44  w-10 h-24 flex justify-between items-center z-30">
            <li>
              <a
                href="https://www.instagram.com/nftxpo/"
                className="lg:block hidden"
              >
                <Instagram
                  iconSize={" 2xl:w-6 2xl:h-6 "}
                  color={`${navColor}`}
                />
              </a>
            </li>

            <li>
              <a href="https://twitter.com/NFT_xpo" className="lg:block hidden">
                <Twitter iconSize={" 2xl:w-6 2xl:h-6 "} color={`${navColor}`} />
              </a>
            </li>

            <li>
              <button onClick={() => setMenuActive(!menuActive)}>
                {!menuActive ? (
                  <svg
                    id="ye"
                    className="lg:block lg:w-10 lg:h-10 hidden lg:mt-2"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="hamburgerMenu">
                      <rect
                        id="LineBot"
                        width="40.9091"
                        height="6"
                        transform="matrix(-1 0 0 1 108 81)"
                        fill={`${navColor}`}
                      />
                      <rect
                        id="LineMid"
                        width="68"
                        height="6"
                        transform="matrix(-1 0 0 1 108 57)"
                        fill={`${navColor}`}
                      />
                      <rect
                        id="LineTop"
                        width="96"
                        height="6"
                        transform="matrix(-1 0 0 1 108 33)"
                        fill={`${navColor}`}
                      />
                    </g>
                  </svg>
                ) : (
                  <svg
                    className="lg:block lg:w-10 lg:h-10 w-14 h-14 hidden lg:mt-2"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="xMenu">
                      <rect
                        id="LineRightL"
                        x="23.9375"
                        y="91.8198"
                        width="96"
                        height="6"
                        transform="rotate(-45 23.9375 91.8198)"
                        fill={`${navColor}`}
                      />
                      <rect
                        id="LineLeftR"
                        width="96"
                        height="6"
                        transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.0624 91.8198)"
                        fill={`${navColor}`}
                      />
                    </g>
                  </svg>
                )}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:block lg:w-10 lg:h-10 w-15 h-15 hidden lg:mt-2"
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
                </svg> */}
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
