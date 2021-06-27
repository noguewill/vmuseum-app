import Button from "./Button";
import ScrollUp from "./icons/ScrollUp";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
      <NavBar
        logoColor={"white"}
        navColor={"#946a00"}
        textColor={"white"}
        strokeTheme={"strokeYellow"}
      />
      <div className="w-full min-h-screen flex items-center justify-center ">
        <img
          className="absolute w-full h-screen object-cover "
          src="../assets/etherealBG.jpg"
          alt="ethereal background"
        />

        <div className=" w-full h-screen flex flex-col justify-between">
          <div className="w-full bg-gray-500 h-7"></div>
          <div className=" w-full   z-10">
            <h4
              className="lg:widestxl
           text-base font-medium text-center dirtGold tracking-widestxl text-dirtGold"
            >
              THIS WEEK'S THEME:
            </h4>
            <h1
              className="lg:text-8xl
          text-6xl font-semibold  text-white text-center tracking-widest  etherealHeader "
            >
              ETHEREAL
            </h1>
          </div>

          <div className="lg:items-end lg:mr-16 w-full flex flex-col items-center self-center  z-10">
            <Button />
            <div className="flex flex-col w-auto items-center mb-5">
              <h3 className="lg:text-base text-sm dirtGold tracking-widestxl text-dirtGold">
                scroll to <b>about</b>
              </h3>
              <ScrollUp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
