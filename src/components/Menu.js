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

  const onTitleClick = (index) => {
    setActiveIndex(index);
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
    </>
  );
};

export default Menu;
