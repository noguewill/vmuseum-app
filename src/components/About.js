const About = () => {
  return (
    <div className=" w-full h-full grid grid-cols-3 grid-flow-col grid-rows-2 justify-items-center place-items-center">
      <div className="flex flex-col  col-start-1 mt-10 items-center">
        <h1 className="lg:text-9xl text-3xl font-semibold -mb-5">NFT</h1>
        <h1 className="lg:text-9xl text-3xl font-semibold">XPO</h1>
        <span className="w-full bg-black h-2 mb-3"></span>
        <span className="w-4/6 bg-black h-2 "></span>
      </div>
      <div className="col-start-3 flex flex-col justify-around items-center mt-20 mr-20 font-semibold">
        <h1 className="lg:text-2xl mb-2 ">About Us</h1>
        <p className="max-w-sm mb-5">
          n publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying
        </p>
        <p className="max-w-sm">
          n publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying
        </p>
      </div>

      <div className=" w-full flex col-end-2 row-start-2 justify-around  ml-20">
        <div className="flex flex-col justify-center w-full items-center ">
          <i className="bg-indigo-500 w-20 h-20 mb-5" />
          <p className="text-sm">
            n publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying
          </p>
        </div>
        <div className="flex flex-col justify-center w-full items-center ">
          <i className="bg-indigo-500 w-20 h-20 mb-5" />
          <p className="text-sm">
            n publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying
          </p>
        </div>
      </div>
      <h2 className=" col-start-2 row-start-2 font-semibold lg:text-2xl ">
        Our Process
      </h2>
      <div className=" w-full flex col-start-3 row-start-2 justify-around  mr-20">
        <div className="flex flex-col items-center ">
          <i className="bg-indigo-500 w-20 h-20 mb-5" />
          <p className="text-sm">
            n publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying
          </p>
        </div>
        <div className=" w-full flex col-start-3 row-start-2 justify-around mr-20">
          <div className="flex flex-col items-center ">
            <i className="bg-indigo-500 w-20 h-20 mb-5" />
            <p className="text-sm">
              n publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
