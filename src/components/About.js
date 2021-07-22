import Footer from "./Footer";
const About = ({ xpoThemes, theme }) => {
  return (
    <>
      <div
        id="about"
        className="w-full h-full grid gridcontainer grid-cols-1 justify-center place-content-center place-items-center  "
      >
        <div className="w-full h-full nftxpo_logo_container flex flex-col items-center justify-center">
          <img
            className="2xl:w-6/12 2xl:h-auto  lg:w-96 object-cover"
            src={xpoThemes[theme].themeLogo} /* "../assets/NFTXPOLogo.png" */
            alt=""
          />
        </div>
        <div className="w-full h-full aboutUs_container flex flex-col items-center justify-center">
          {" "}
          <h1
            className={`xl:text-3xl text-2xl mb-3 font-bold text-${xpoThemes[theme].themeAboutUsColor}`}
          >
            About Us
          </h1>
          <p className="2xl:text-2xl 2xl:max-w-lg font-medium max-w-sm mb-5 ">
            NFTXPO is a platform where outstanding NFT art pieces are shown in a
            spotlight giving the NFT artists the deserved spectacle.
          </p>
          <p className="2xl:text-2xl 2xl:max-w-lg font-medium max-w-sm ">
            The selection of NFT pieces are made through a filter of
            requirements, and the pieces that aligns most towards our criteria,
            are chosen, and then ranked appropiately.
          </p>
        </div>

        <div
          className="lg:flex-row
        w-full h-full icon_container flex flex-col my-5  items-center  "
        >
          <div
            className="lg:mb-0 lg:order-none lg:flex-row mb-10
          w-full h-full flex flex-col iconBlock1 order-2 "
          >
            <div
              className="lg:ml-8 
            w-full h-full  flex flex-col  items-center p-5 "
            >
              <video
                autoPlay
                loop
                muted
                className=" w-20 object-cover h-20 mb-8 z-40"
              >
                <source src="../assets/ratingIcon_1.mp4" type="video/mp4" />
              </video>

              <p className="2xl:text-lg text-sm font-medium max-w-xs ">
                <b>1)</b> Selection Pool opens after the theme is announced,
                NFTXPO starts receiving entries.
              </p>
            </div>
            <div className="w-full  h-full  flex flex-col  items-center p-5">
              <img
                src="../assets/processIcon.png"
                alt="ye"
                className=" w-20 h-20 mb-8"
              />
              <p className="2xl:text-lg text-sm font-medium max-w-xs">
                <b>2)</b> NFTXPO chooses the NFTs based on the following
                criteria:
                <br />
                -Compability with theme
                <br />
                -Artist's visual expression
                <br />
                -Craftmanship
              </p>
            </div>
          </div>
          <div
            className="lg:order-none 
          w-2/6 ourProcess flex justify-center items-center order-1"
          >
            <h2
              className={`lg:mt-0
            font-semibold text-2xl mt-16 mb-5 text-${xpoThemes[theme].themeAboutUsColor}`}
            >
              Our Process
            </h2>
          </div>
          <div
            className=" lg:order-none lg:flex-row 
          w-full h-full order-3 iconBlock2 flex flex-col items-center"
          >
            {" "}
            <div className="w-full h-full  flex flex-col  items-center p-5">
              <img
                src="../assets/ratingIcon.png"
                alt="ye"
                className=" w-20 h-20 mb-8"
              />
              <p className="2xl:text-lg text-sm font-medium   max-w-xs">
                <b>3)</b> 20 NFTs are chosen from the selection pool, from 20 we
                filter down to 7 that are chosen to be displayed on the website.
              </p>
            </div>
            <div
              className="lg:mr-8 
            w-full h-full  flex flex-col  items-center p-5"
            >
              <img
                src="../assets/meetIcon.png"
                alt="ye"
                className=" w-20 h-20 mb-8"
              />

              <p className="2xl:text-lg text-sm font-medium  max-w-xs">
                <b>4)</b> The discussion of what the theme of next week will be,
                starts once again.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About the theme */}
      <div
        className="lg:flex-row 2xl:h-screen lg:h-screen relative
      w-full h-full  flex flex-col items-center z-10 "
      >
        <img
          className="absolute w-full h-full object-fill "
          src={xpoThemes[theme].themeAboutBG}
          alt="ethereal background"
        />
        <div
          className="lg:justify-start 2xl:ml-12 lg:ml-12
          w-3/6 flex  justify-center items-center 
        "
        >
          <img
            src={xpoThemes[theme].themeAboutTitle}
            alt=""
            className="lg:mt-0 lg:mb-0 
           2xl:w-3/5 w-96 h-auto z-10  mt-10 -mb-5 "
          />
        </div>
        <div
          className=" lg:w-3/6 
        w-full h-full flex flex-col justify-center items-center p-5 z-10"
        >
          <h2
            className={`2xl:text-8xl lg:text-7xl text-6xl font-semibold text-white stroke-current mb-10 z-10 ${xpoThemes[theme].themeStrokeColor}`}
          >
            THIS WEEK
          </h2>
          <div
            className={`ml-5 z-10 text-${xpoThemes[theme].themeAboutParaColor}`}
          >
            <i
              className="2xl:text-2xl lg:text-left lg:mb-0
             text-left mb-0"
            >
              {xpoThemes[theme].themeLatinName}
            </i>

            <p
              className={`2xl:text-3xl 2xl:max-w-3xl lg:text-2xl  lg:text-left
             font-semibold  max-w-lg mb-10 `}
            >
              {xpoThemes[theme].themeAboutDesc}
            </p>
          </div>
        </div>
      </div>
      <Footer id={"home"} xpoThemes={xpoThemes} theme={theme} />
    </>
  );
};

export default About;
