import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import NFTDescIconContainer from "./NFTDescIconContainer";
import Footer from "./Footer";
const NFTdesc = () => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row  font-medium  xs:items-center">
        {/* left sidebar */}
        <div
          className="2xl:justify-around
        md:w-1/3 w-full flex flex-col px-5 pt-10 justify-between items-center "
        >
          <div>
            <h1 className="2xl:text-5xl lg:text-3xl  lg:mb-2">DESCRIPTION</h1>
            <p className="2xl:text-xl lg:text-sm 2xl:max-w-lg lg:max-w-sm">
              <i>
                "Her own reflection was irresistible, she slowly came closer
                staring at that pure incarnation <br className="hidden" />
                of beauty.
                <br className="hidden" />
                But she was too close and ended up losing herself in that
                beautiful reflection".
              </i>
            </p>
          </div>
          <div>
            <h1 className="2xl:text-5xl lg:text-3xl lg:mb-2">
              STORY BEHIND IT
            </h1>
            <p className="2xl:text-xl lg:text-sm 2xl:max-w-lg lg:max-w-sm ">
              For the realization of Narcissus 2.0, i found inspiration in the
              Greek myth of Narcissus,
              <br className="2xl:hidden" /> i decided to reinterprate in a
              modern way <br className="2xl:hidden" />
              and with a female character.
            </p>
          </div>
          <div className="w-12/12 flex flex-col items-center mb-20">
            <h1 className="2xl:text-5xl lg:text-3xl lg:mb-2">TOOLS</h1>
            <NFTDescIconContainer />
          </div>
        </div>

        {/* asset carousel */}
        <div className="md:w-1/3 w-full h-screen bg-gray-900 flex justify-center items-center">
          <img
            className="absolute  md:w-1/3 w-full h-screen object-contain "
            src="../assets/Work in progress.jpg"
            alt="ethereal background"
          />
          <div className="order-1  z-10 flex flex-col justify-center items-center 2xl:ml-28 ml-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="2xl:w-14 2xl:h-14 h-10 w-10  "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="2xl:text-base text-xs">next</span>
          </div>
          <div className="self-end flex justify-center items-center  ">
            <h1 className="2xl:text-xl text-white font-light 2xl:mb-10 mb-2 2xl:ml-44 ml-32">
              Narcissus 2.0 pre-render
            </h1>
          </div>
        </div>

        {/* right sidebar */}
        <div className="md:w-1/3 w-full flex flex-col pl-7 pt-10  2xl:justify-around justify-between items-center">
          <div>
            <h1 className="2xl:text-5xl lg:text-3xl  lg:mb-2">THE MYTH</h1>
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
          <div className="w-11/12   h-auto flex flex-col items-center max-w-md xl:py-0 lg:py-12 ">
            <h1 className="2xl:text-5xl lg:text-3xl lg:mb-2">
              FIND <span className="text-yellow">aurorae</span> ON
            </h1>
            <div className="w-full h-full flex justify-between items-center ">
              <div className=" w-50 h-16 flex flex-col justify-center items-center">
                <a className="2xl:mt-10 lg:mb-2" href="">
                  <Twitter
                    color={"gold"}
                    iconSize={"2xl:w-8 lg:w-6 2xl:h-8 lg:h-6"}
                  />
                </a>
                <h6 className="2xl:text-base lg:text-xs">at @aurorae</h6>
              </div>
              <div className=" w-50 h-16 flex flex-col justify-center items-center">
                <a className="2xl:mt-10 lg:mb-2" href="">
                  <Instagram
                    color={"gold"}
                    iconSize={"2xl:w-8 lg:w-6 2xl:h-8 lg:h-6"}
                  />
                </a>
                <h6 className="2xl:text-base lg:text-xs">at @realaurorae</h6>
              </div>
              <div className=" w-50 h-16 flex flex-col justify-center items-center">
                <a className="2xl:mt-10 lg:mb-2" href="">
                  <Instagram
                    color={"gold"}
                    iconSize={"2xl:w-8 lg:w-6 2xl:h-8 lg:h-6"}
                  />
                </a>
                <h6 className="2xl:text-base lg:text-xs">at @realaurorae</h6>
              </div>
            </div>
          </div>

          <div className="w-72 h-56 bg-gray-900  mb-10 self-center">
            <img
              className="absolute w-72 h-56 object-cover"
              src="../assets/Work in progress.jpg"
              alt="ethereal background"
            />
            <p>
              <i>Aurora</i>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NFTdesc;
