import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Menu = () => {
  const menuObj = [
    {
      text: "Home",
      href: "/",
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

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const renderedItems = menuObj.map((item, index) => {
    const active = index === activeIndex ? "bg-dirtGold text-white" : "";
    return (
      <React.Fragment key={index}>
        <li className="2xl:pb-5 pb-1 text-center flex flex-col  text-dirtGold menuItem 2xl:justify-around">
          <Link to={item.href}>
            <button
              id={index}
              href={item.href}
              onClick={() => onTitleClick(index)}
              className={`${active}  2xl:text-2xl   text-center hover:underline pb-1 px-5 hover:text-dirtGold transition ease font-light tracking-widestxxl"`}
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
    </>
  );
};

export default Menu;
