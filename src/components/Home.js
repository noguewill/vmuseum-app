import Button from "./Button";
import NavBar from "./NavBar";
import { Link as Scroll } from "react-scroll";

const Home = ({ xpoThemes, theme, setTheme }) => {
  const changeTheme = () => {
    if (theme < 3) {
      setTheme(theme + 1);
    } else if (theme === 3) {
      setTheme((theme = 0));
    }
  };

  return (
    <>
      <NavBar
        logoColor={`${xpoThemes[theme].themeHomeLogoColor}`}
        navColor={`${xpoThemes[theme].themeHomeNavbarColor}`}
        textColor={`${xpoThemes[theme].themeHomeNavbarColor}`}
        strokeTheme={`${xpoThemes[theme].themeHomeLogoStroke}`}
        xpoThemes={xpoThemes}
        theme={theme}
      />
      <div
        id="home"
        className="w-full h-auto flex items-center justify-center "
      >
        <img
          loading="lazy"
          className="absolute w-full h-full object-cover "
          src={xpoThemes[theme].themeBG}
          alt="../assets/etherealAssets/etherealBGMin.jpg"
        />

        <div className=" w-full h-screen flex flex-col justify-between ">
          <div className="w-full  h-7"></div>
          <div className=" w-full z-10">
            <h4
              className={`2xl:text-2xl lg:widestxl
           text-base font-medium text-center dirtGold tracking-widestxl ${xpoThemes[theme].themeMainColor} `}
            >
              THIS WEEK'S THEME:
            </h4>
            <h1
              className={`2xl:text-9xl lg:text-8xl
              text-6xl font-semibold  text-white text-center tracking-widest ${xpoThemes[theme].themeStrokeColor} `}
            >
              {/*               <button
                className={`${xpoThemes[theme].themeStrokeColor} `}
                onClick={() => changeTheme()}
              > */}
              {xpoThemes[theme].themeName}
              {/*    </button> */}
            </h1>
          </div>

          <div className="lg:items-end lg:mr-16 w-full flex lg:flex-row flex-col justify-center items-center self-center cursor-pointer z-10">
            <Button xpoThemes={xpoThemes} theme={theme} />
            <Scroll
              className="lg:w-1/6 w-2/6 lg:my-0 mt-5"
              to="about"
              spy={true}
              smooth={true}
            >
              <div className="flex flex-col lg:w-auto w-full h-full items-center mb-5 arrowContainerDown themeItem3 ">
                <h3
                  className={`2xl:text-2xl lg:text-base text-sm  text-center w-full tracking-widestxl ${xpoThemes[theme].themeMainColor}`}
                >
                  scroll to <b>about</b>
                </h3>
                <svg
                  className="arrowDown "
                  width="24"
                  height="20"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8825 18.3441C10.5061 19.0503 9.49389 19.0503 9.1175 18.3441L0.391283 1.97032C0.0362952 1.30422 0.518995 0.5 1.27378 0.5L18.7262 0.499998C19.481 0.499998 19.9637 1.30422 19.6087 1.97032L10.8825 18.3441Z"
                    fill={`${xpoThemes[theme].themeHomeScrollColor}`}
                  />
                </svg>
              </div>
            </Scroll>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
