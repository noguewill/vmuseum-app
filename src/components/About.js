import Footer from "./Footer";
const About = () => {
  return (
    <>
      <div
        id="about"
        className="w-full h-full grid gridcontainer grid-cols-1 justify-center place-content-center place-items-center  "
      >
        <div className="w-full h-full nftxpo_logo_container flex flex-col items-center justify-center">
          <img
            className="2xl:w-6/12 2xl:h-auto  lg:w-96 object-cover"
            src="../assets/NFTXPOLogo.png"
            alt=""
          />
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
              <svg
                className=" w-20 h-20 mb-8"
                viewBox="0 0 110 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M79.915 0C67.0707 0 28.8328 12.5657 19.6057 15.6402C7.359 19.3857 0 31.0365 0 45.9928V73.8137L49.1957 83.4808V107.908L64.5773 110L75.6598 99.5463V76.7873L110 56.4465V29.2728C110 10.8002 98.8093 0 79.915 0ZM60.4578 47.2523L56.8883 44.6472L59.1782 39.8658C59.8363 42.2583 60.2672 44.7333 60.4578 47.2523ZM15.037 29.7293L52.2977 26.3725C54.7032 29.3585 56.6253 32.7035 57.9938 36.2853L54.0595 44.5042L54.0577 44.5097L54.0485 44.5317L50.1912 53.0878L40.8668 47.3678L14.058 30.0337C14.3257 29.8815 14.6483 29.7678 15.037 29.7293ZM11.4272 72.5523L20.0072 68.7793L21.4793 73.9328C21.5435 74.1602 21.6462 74.3618 21.7287 74.5782L11.4272 72.5523ZM24.0002 73.2343L12.8352 34.1697C12.6483 33.5398 12.5959 32.8778 12.6812 32.2263L38.4523 48.8895L34.0817 57.376L24.9645 75.0787C24.5185 74.5375 24.1901 73.9094 24.0002 73.2343ZM27.214 76.417L35.6107 60.1113L40.6707 50.2883L50.0867 56.0597C50.2282 56.1434 50.3844 56.1994 50.5468 56.2247L50.6733 56.243C50.71 56.2448 50.743 56.2558 50.7797 56.2558C51.0314 56.2559 51.2778 56.1838 51.4897 56.0479C51.7016 55.9121 51.87 55.7183 51.975 55.4895L55.7792 47.0488L58.3513 48.9262L60.5752 50.5505V64.6048L28.4698 76.285C28.0684 76.4314 27.6371 76.4767 27.214 76.417ZM34.0523 77L57.0845 68.6217V81.5247L34.0523 77ZM61.083 106.057L52.6882 104.914V84.1647L60.5752 85.7157V85.7193L61.083 85.4187V106.057ZM87.6975 19.4407L68.0203 26.7832L68.035 58.8922L63.2665 61.2058V11.0348L87.7103 2.7665L87.6975 19.4407Z"
                  fill="black"
                />
              </svg>
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
      w-full h-full  flex flex-col items-center z-10 bg-gray-500"
      >
        <img
          className="absolute w-full h-full object-fill "
          src="../assets/Subtract.jpg"
          alt="ethereal background"
        />
        <div
          className="lg:justify-start 2xl:ml-12 lg:ml-20
          w-3/6 flex  justify-center items-center 
        "
        >
          <img
            src="../assets/aboutTheTheme.png"
            alt=""
            className="lg:mt-0 lg:mb-0 
           2xl:w-3/5 w-96 h-auto z-10  mt-10 -mb-5 "
          />
        </div>
        <div
          className=" lg:w-3/6 
        w-full h-full flex flex-col justify-center items-center p-5 z-10"
        >
          <h2 className="2xl:text-8xl lg:text-7xl text-6xl font-semibold text-white etherealHeader mb-10 z-10">
            THIS WEEK
          </h2>
          <div className="ml-5 z-10 ">
            <i
              className="2xl:text-2xl lg:text-left lg:mb-0
             text-left mb-0"
            >
              ethe.re.al \ i-'thir-e-el
            </i>

            <p
              className="2xl:text-3xl 2xl:max-w-3xl lg:text-2xl  lg:text-left
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
      <Footer id={"home"} />
    </>
  );
};

export default About;
