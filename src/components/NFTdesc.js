const NFTdesc = () => {
  return (
    <>
      <div className="w-full flex font-medium ">
        {/* left sidebar */}
        <div className="w-1/3 flex flex-col px-5 pt-20 justify-between ">
          <div>
            <h1 className="lg:text-4xl  lg:mb-2">DESCRIPTION</h1>
            <p className="max-w-sm  ">
              <i>
                "Her own reflection was irresistible, she slowly came closer
                staring at that pure incarnation <br />
                of beauty.
                <br />
                But she was too close and ended up losing herself in that
                beautiful reflection".
              </i>
            </p>
          </div>
          <div>
            <h1 className="lg:text-4xl lg:mb-2">STORY BEHIND IT</h1>
            <p className="max-w-sm ">
              For the realization of Narcissus 2.0, i found inspiration in the
              Greek myth of Narcissus,
              <br /> i decided to reinterprate in a modern way <br />
              and with a female character.
            </p>
          </div>
          <h1 className="lg:text-4xl self-center lg:mb-2">TOOLS</h1>
          <div className=""></div>
        </div>
        {/* asset carousel */}
        <div className="w-1/3 h-screen bg-gray-900">
          <img
            className="absolute w-1/3 h-screen object-contain"
            src="../assets/Work in progress.jpg"
            alt="ethereal background"
          />
          <div className="self-end">
            <h1>Narcissus 2.0</h1>
          </div>
        </div>
        {/* right sidebar */}
        <div className="w-1/3 flex flex-col pl-10 pt-20 justify-between ">
          <div>
            <h1 className="lg:text-4xl  lg:mb-2">THE MYTH</h1>
            <p className="max-w-sm  ">
              In Greek mythology, <b>Narcissus</b> was a hunter from Thespiae in
              Boeotia who was known <br />
              for his beauty.
              <br />
              He rejected all romantic advances, eventually falling in love with
              his own reflection in a pool of water, staring at it for the
              remainder of his life. After he died, in his place sprouted a{" "}
              <b>flower</b> bearing his name.
            </p>
          </div>
          <div className="self-center">
            <h1 className="lg:text-4xl lg:mb-2">FIND aurorae ON</h1>
            <div></div>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTdesc;
