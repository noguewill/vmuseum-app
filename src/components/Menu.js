import { render } from "@testing-library/react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Menu = ({ menuActive }) => {
  const menuObj = [
    {
      id: ["", "", "", ""],
      text: ["text", "text", "text", "text"],
      href: ["/", "About", "nftoftheday", "nftweekly"],
    },
  ];
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const renderedItems = menuObj.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <>
        <li className="pb-1">
          <Link to={`${item.href}`}>
            <button
              onClick={() => onTitleClick(index)}
              id={`${index}`}
              className={`${active} p-1.5 rounded text-center hover:bg-indigo-500  transition ease-in-out text-white"`}
            >
              {item.text[0]}
            </button>
          </Link>
        </li>
      </>
    );
  });
  return (
    <div className="flex flex-col">
      <div
        className={`${
          !menuActive ? "invisible" : ""
        } absolute w-80 h-full flex flex-col  bg-gray-300  z-20 self-end fullscreen`}
      >
        <ul className="  flex flex-col pt-40  justify-around items-center ">
          {renderedItems}
          {/*          <li className="pb-1">
            <Link to="/">
              <button
                id="mermaid"
                onClick={(e) => setActiveIndex(e.target.id)}
                className={` p-1.5 rounded text-center hover:bg-indigo-500  transition ease-in-out text-white"`}
              >
                Home
              </button>
            </Link>
          </li>
          <li className="pb-1">
            <Link to="/">
              <button
                className={`   p-1.5 rounded text-center hover:bg-indigo-500  transition ease-in-out`}
              >
                About us
              </button>
            </Link>
          </li>
          <li className="pb-1">
            <Link to="/nftoftheday">
              <button
                className={` p-1.5 rounded text-center hover:bg-indigo-500  transition ease-in-out`}
              >
                Nft of the day
              </button>
            </Link>
          </li>
          <li className="pb-5">
            <Link to="/nftweekly">
              <button
                className={`p-1.5 rounded text-center hover:bg-indigo-500  transition ease-in-out`}
              >
                NFT Weekly
              </button>
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
