import Logo from "./icons/Logo";
import Twitter from "./icons/Twitter";
import Instagram from "./icons/Instagram";

const Footer = () => {
  return (
    <div className="w-full h-32 flex justify-around items-center  mt-5 px-5">
      <div className="w-full h-full  flex flex-col justify-between">
        <Logo textColor={"text-black"} stroke={""} margin={"ml-1"} />
        <h4 className="text-sm font-light"> © NFTXPO 2021</h4>
      </div>
      <div className=" w-full h-full  flex flex-col justify-between items-center pt-2 ">
        <div className="flex flex-col items-center">
          <h3 className="lg:text-sm text-xs">
            Send us your <b>NFT</b> entry at:
          </h3>
          <h3 className="text-lg  font-semibold underline lg:mb-5">
            <a href="/">nftxpo@gmail.com</a>
          </h3>
        </div>
        <div className=" w-full  flex flex-col  items-center lg:pb-5">
          <h4 className="lg:mb-2 mb-1 text-sm">find us on:</h4>
          <div className="lg:w-2/6 lg:mb-0 w-4/5 flex justify-around ">
            <a href="">
              <Twitter color={"#946a00"} />
            </a>
            <a href="">
              <Instagram color={"#946a00"} />
            </a>
          </div>
        </div>
      </div>
      <div className=" w-full h-full flex justify-end items-end p-2">
        <div className="flex items-center">
          <h3 className="lg:text-xl lg:mr-2 text-base font-semibold ">
            back to top
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
