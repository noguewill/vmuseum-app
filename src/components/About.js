import Footer from "./Footer";
const About = () => {
  return (
    <>
      <div className="w-full h-full grid gridcontainer grid-cols-1 justify-center place-content-center place-items-center ">
        <div className="w-full h-full nftxpo_logo_container flex flex-col items-center justify-center">
          {" "}
          <h1 className="nftxpo_logo lg:mt-0 text-9xl mt-12 font-bold -mb-5 ">
            NFT
          </h1>
          <h1 className="nftxpo_logo text-9xl font-bold">XPO</h1>
          <span className="xl:w-96 w-64 bg-black h-2 mb-3"></span>
          <span className="xl:w-80 w-48 bg-black h-2 xl:mb-0 mb-16"></span>
        </div>
        <div class="w-full h-full aboutUs_container flex flex-col items-center justify-center">
          {" "}
          <h1 className="xl:text-3xl text-2xl mb-3 font-bold">About Us</h1>
          <p className="2xl:text-2xl 2xl:max-w-lg font-medium max-w-sm mb-5 ">
            NFTXPO is a platform where outstanding NFT art pieces are shown in a
            spotlight giving the NFT artists the deserved spectacle.
          </p>
          <p className="2xl:text-2xl 2xl:max-w-lg font-medium max-w-sm ">
            The selection of NFT pieces are made through a filter of
            requirements, and the pieces that algins most towards our criteria,
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
              <i className="bg-indigo-200 w-20 h-20 mb-8 " />
              <p className="2xl:text-lg text-sm font-medium max-w-xs ">
                <b>1)</b> Selection Pool opens after the theme is announced,
                NFTXPO starts receiving entries.
              </p>
            </div>
            <div className="w-full  h-full  flex flex-col  items-center p-5">
              <i className="bg-indigo-200 w-20 h-20 mb-8" />
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
              className="lg:mt-0
            font-semibold text-2xl mt-16 mb-5"
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
              <i className="bg-indigo-200 w-20 h-20 mb-8" />
              <p className="2xl:text-lg text-sm font-medium   max-w-xs">
                <b>3)</b> 20 NFTs are chosen from the selection pool, from 20 we
                filter down to 7 that are chosen to be displayed on the website.
              </p>
            </div>
            <div
              className="lg:mr-8 
            w-full h-full  flex flex-col  items-center p-5"
            >
              <i className=" bg-indigo-200 w-20 h-20 mb-8" />

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
        className="lg:flex-row lg:h-screen relative
      w-full h-full  flex flex-col items-center z-10 bg-gray-500"
      >
        <img
          className="absolute w-full h-full object-cover "
          src="../assets/etherealBG.jpg"
          alt="ethereal background"
        />
        <div
          className=" lg:pr-20
          w-3/6 flex  justify-center items-center 
        "
        >
          <h1
            className="lg:text-8xl 
          text-2xl z-10 font-semibold mt-10 -mb-5  "
          >
            ABOUT <br className="lg:block hidden mb-5" />
            THE THEME
          </h1>
        </div>
        <div
          className=" lg:w-3/6 
        w-full h-full flex flex-col justify-center items-center p-5 z-10"
        >
          <h2 className="lg:text-7xl text-6xl font-semibold text-white etherealHeader mb-10 z-10">
            THIS WEEK
          </h2>
          <div className="ml-5 z-10 ">
            <p
              className="lg:text-left lg:mb-0
             text-left mb-0"
            >
              <i>ethe.re.al \ i-'thir-e-el</i>
            </p>
            <p
              className="lg:text-2xl  lg:text-left
             font-semibold  max-w-lg mb-10"
            >
              Ethereal: the subtlety that encompasses perfection that is
              incompatible with reality;it's out of this world, impossible to
              reach, it's celestial perfection, not belonging to the humans,
              it's soft and immaterial, delicate and beautiful.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
