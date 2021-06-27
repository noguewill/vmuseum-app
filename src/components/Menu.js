import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuObj = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/About",
    },
    {
      text: "NFT of the Day",
      href: "/nftoftheday",
    },
    {
      text: "NFT Weekly",
      href: "/nftweekly",
    },
  ];
  /*   const onTitleClick = (index) => {
    setActiveIndex(index);
  }; */
  const onTitleClick = (index) => {
    setActiveIndex(index);
    console.log(index);
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const renderedItems = menuObj.map((item, index) => {
    const active = index === activeIndex ? "bg-dirtGold text-white" : "";
    return (
      <React.Fragment key={index}>
        <li className="pb-1 text-center text-dirtGold">
          <Link to={item.href}>
            <button
              id={index}
              href={item.href}
              onClick={() => onTitleClick(index)}
              className={`${active} p-1.5 rounded text-center hover:bg-dirtGold hover:text-white transition ease-in-out  "`}
            >
              {item.text}
            </button>
          </Link>
        </li>
      </React.Fragment>
    );
  });

  return (
    <>
      <li className="pb-1">{renderedItems}</li>
      {/* <li className="pb-1">
            <Link to="/">
              <button
                id="mermaid"
                onClick={(e) => {
                  activeButton(e.target.id);
                }}
                className={` ${active} p-1.5 rounded text-center hover:bg-indigo-500  transition ease-in-out text-white"`}
              >
                Home
              </button>
            </Link>
          </li>
          <li className="pb-1">
            <Link to="/">
              <button
                onClick={(e) => {
                  setActiveIndex(e.target.id);
                  activeButton(e.target.id);
                }}
                className={`${active} p-1.5 rounded text-center hover:bg-indigo-500  transition ease-in-out`}
              >
                About us
              </button>
            </Link>
          </li>
          <li className="pb-1">
            <Link to="/nftoftheday">
              <button
                id="yeah"
                onClick={(e) => {
                  setActiveIndex(e.target.id);
                  activeButton(e.target.id);
                }}
                className={`${active} p-1.5 rounded text-center hover:bg-indigo-500  transition ease-in-out`}
              >
                Nft of the day
              </button>
            </Link>
          </li>
          <li className="pb-5">
            <Link to="/nftweekly">
              <button
                onClick={(e) => {
                  setActiveIndex(e.target.id);
                  activeButton(e.target.id);
                }}
                className={`${active} p-1.5 rounded text-center hover:bg-indigo-500  transition ease-in-out`}
              >
                NFT Weekly
              </button>
            </Link>
          </li> */}
    </>
  );
};

export default Menu;
