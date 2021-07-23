import React, { useState } from "react";
import { Link } from "react-router-dom";
import xpoThemes from "./themeData";

const Menu = ({ theme }) => {
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
    const active =
      index === activeIndex
        ? `"bg-${xpoThemes[theme].themeMainColor} ${xpoThemes[theme].themeMainColor}"`
        : "";
    return (
      <React.Fragment key={index}>
        {/* <li className="pb-1 text-center text-dirtGold "> */}
        <Link
          to={item.href}
          className={`2xl:pb-5 pb-1 text-center flex flex-col  ${xpoThemes[theme].themeMainColor}  2xl:justify-around`}
        >
          <button
            id={index}
            href={item.href}
            onClick={() => onTitleClick(index)}
            className={`${active}  2xl:text-2xl   text-center hover:underline pb-1 px-5 hover:text-yellow-400 menuItem transition ease font-light tracking-widestxl"`}
          >
            {item.text}
          </button>
        </Link>
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
