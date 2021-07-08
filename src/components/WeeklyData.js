import { Link, useHistory } from "react-router-dom";

const WeeklyData = ({
  cStyle,
  weeklySlides,
  current,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <>
      <Link to="/nftoftheday">
        <div className="w-auto h-screen imgContainer overflow-hidden flex flex-col ">
          <img
            weeklySlides={weeklySlides}
            src={weeklySlides[current].weeklyImg}
            alt={weeklySlides[current].weeklyImg.alt}
            className={cStyle}
          />

          {weeklySlides[current].locked ? (
            <>
              <div className="w-1/3 h-screen flex flex-col justify-center items-center z-20 absolute text-white ">
                <h1 className="2xl:text-6xl 2xl:mb-10">
                  {weeklySlides[current].name}
                </h1>
                <svg
                  className="lg:w-24 lg:h-24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M15 9h-1V6c0-2.2-1.8-4-4-4S6 3.8 6 6v3H5c-.5 0-1 .5-1 1v7c0 .5.5 1 1 1h10c.5 0 1-.5 1-1v-7c0-.5-.5-1-1-1zm-4 7H9l.4-2.2c-.5-.2-.9-.8-.9-1.3c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .6-.3 1.1-.9 1.3L11 16zm1-7H8V6c0-1.1.9-2 2-2s2 .9 2 2v3z"
                    fill="white"
                  />
                </svg>
                <h1 className="2xl:text-5xl 2xl:mb-1">LOCKED</h1>
                <h3 className="2xl:text-4xl  ">
                  {hours}
                  <b>h :</b> {minutes}
                  <b>m :</b> {seconds}
                  <b>s</b>
                </h3>
              </div>
            </>
          ) : null}
        </div>
      </Link>
    </>
  );
};

export default WeeklyData;
