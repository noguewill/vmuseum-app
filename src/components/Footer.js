import Logo from "./icons/Logo";
import Twitter from "./icons/Twitter";
import Instagram from "./icons/Instagram";
import { Link } from "react-scroll";

const Footer = ({ id, xpoThemes, theme }) => {
  return (
    <div className="w-full h-72 flex justify-around items-center  mt-5 px-5">
      <div className="w-full h-full  flex flex-col justify-between">
        <div
          className={` lg:text-4xl w-2/12 flex flex-col justify-center items-center text-2xl font-semibold text-black`}
        >
          <h2 className={`-mb-3 `}>NFT</h2>
          <h2>XPO</h2>
        </div>
        <h4 className="text-sm font-light"> © NFTXPO 2021</h4>
      </div>
      <div className=" w-full h-full  flex flex-col justify-around items-center pt-10 ">
        <div className="flex flex-col items-center">
          <h3 className="2xl:text-xl lg:text-sm text-xs">
            Send us your <b>NFT</b> entry at:
          </h3>
          <h3 className="2xl:text-2xl text-lg  font-semibold underline ">
            <a href="mailto:nftxpo@gmail.com">nftxpo@gmail.com</a>
          </h3>
        </div>
        <div className=" w-full  flex flex-col  items-center lg:pb-5">
          <h4 className="2xl:text-base lg:mb-2 mb-1 text-sm">find us on:</h4>
          <div className="lg:w-2/6 lg:mb-0 w-4/5 flex justify-around ">
            <a href="https://twitter.com/NFT_xpo">
              <Twitter
                color={`${xpoThemes[theme].themeFooterIconColor}`}
                iconSize={"2xl:w-7 2xl:h-7 w-6 h-6"}
              />
            </a>
            <a href="https://www.instagram.com/nftxpo/">
              <Instagram
                color={`${xpoThemes[theme].themeFooterIconColor}`}
                iconSize={"2xl:w-7 2xl:h-7 w-6 h-6"}
              />
            </a>
          </div>
        </div>
      </div>
      <div className=" w-full h-full flex justify-end items-end p-2">
        <Link to={id} spy={true} smooth={true}>
          <div className="flex items-center cursor-pointer arrowContainer">
            <h3
              className={`2xl:text-2xl lg:text-xl xs:text-base lg:mr-2 text-base font-semibold  `}
            >
              back to top
            </h3>
            <svg
              className="2xl:w-6 2xl:h-6 w-4 h-4 arrowUp"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"
                fill={`black`}
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
