const About = () => {
  return (
    <>
      <div className="w-full h-full grid gridcontainer  ">
        <div className="w-full h-full nftxpo_logo_container flex flex-col items-center justify-center">
          {" "}
          <h1 className="nftxpo_logo text-3xl font-bold -mb-5 ">NFT</h1>
          <h1 className="nftxpo_logo text-3xl font-bold">XPO</h1>
          <span className="w-96 bg-black h-2 mb-3"></span>
          <span className="w-80 bg-black h-2 "></span>
        </div>
        <div class="w-full h-full aboutUs_container flex flex-col items-center justify-center">
          {" "}
          <h1 className="lg:text-2xl mb-3 font-bold">About Us</h1>
          <p className="font-medium max-w-sm mb-5 ">
            NFTXPO is a platform where outstanding NFT art pieces are shown in a
            spotlight giving the NFT artists the deserved spectacle.
          </p>
          <p className="font-medium max-w-sm ">
            The selection of NFT pieces are made through a filter of
            requirements, and the pieces that algins most towards our criteria,
            are chosen, and then ranked appropiately.
          </p>
        </div>

        <div className="w-full h-full icon_container flex  mt-5">
          <div className="w-full h-full flex  iconBlock1">
            <div className="ml-8 w-full h-full  flex flex-col  items-center p-5">
              <i className="bg-indigo-200 w-20 h-20 mb-8" />
              <p className="text-sm font-medium lg:max-w-xs">
                <b>1)</b> Selection Pool opens after the theme is announced,
                NFTXPO starts receiving entries.
              </p>
            </div>
            <div className="w-full h-full  flex flex-col  items-center p-5">
              <i className="bg-indigo-200 w-20 h-20 mb-8" />
              <p className="text-sm font-medium lg:max-w-xs">
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
          <div className="w-2/6 ourProcess flex justify-center items-center">
            <h2 className="font-semibold lg: text-2xl ">Our Process</h2>
          </div>
          <div className="w-full h-full  iconBlock2 flex">
            {" "}
            <div className="w-full h-full  flex flex-col  items-center p-5">
              <i className="bg-indigo-200 w-20 h-20 mb-8" />
              <p className="text-sm font-medium   lg:max-w-xs">
                <b>3)</b> 20 NFTs are chosen from the selection pool, from 20 we
                filter down to 7 that are chosen to be displayed on the website.
              </p>
            </div>
            <div className="mr-8 w-full h-full  flex flex-col  items-center p-5">
              <i className=" bg-indigo-200 w-20 h-20 mb-8" />
              <p className="text-sm font-medium  lg:max-w-xs">
                <b>4)</b> The discussion of what the theme of next week will be,
                starts once again.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-400 flex  items-center">
        <div
          className=" h-64 w-3/6 flex  justify-center items-center pr-20 
        "
        >
          {/* <div className="triangle-right absolute "></div> */}
          <svg
            className="rotate-180 absolute "
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            width="50em"
            height="50em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 20 20"
          >
            <path d="M15 10l-9 5V5l9 5z" fill="white" />
          </svg>
          <h1 className="lg:text-8xl z-10 font-semibold">
            ABOUT <br />
            THE THEME
          </h1>
        </div>
        <div className="h-full w-3/6 flex flex-col justify-between items-center p-5">
          <h2 className="lg:text-6xl font-semibold text-white etherealHeader mb-10">
            THIS WEEK
          </h2>
          <div className="">
            <p className="mb-5">
              <i>ethe.re.al \ i-'thir-e-el</i>
            </p>
            <p className="lg:text-lg font-semibold">
              Ethereal: the subtlety that encompasses perfection that is
              incompatible with reality;it's out of this world, impossible to
              reach, it's celestial perfection, not belonging to the humans,
              it's soft and immaterial, delicate and beautiful.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
