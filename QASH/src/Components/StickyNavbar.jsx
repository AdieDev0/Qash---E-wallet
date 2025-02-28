import React from "react";
import { FaAngleDown } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="bg-stone-900 px-40 py-2">
      <div className="flex items-center justify-between">
        <div>
          {/* TEXT LOGO */}
          <p className="text-5xl text-purple-700 font-extrabold cursor-pointer">
            QASH
          </p>
        </div>
        <div className="flex items-center gap-3">
          <h1 className="text-white cursor-pointer rounded-md hover:bg-stone-500 duration-200 p-2">
            Home
          </h1>
          {/* HOVER BUTTON */}
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="m-1 flex items-center text-white gap-1 cursor-pointer rounded-md hover:bg-stone-500 duration-200 p-2"
            >
              Services <FaAngleDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          {/* HOVER BUTTON 2 */}
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="m-1 flex items-center text-white gap-1  cursor-pointer rounded-md hover:bg-stone-500 duration-200 p-2"
            >
              User Guide <FaAngleDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <h1 className="text-white cursor-pointer rounded-md hover:bg-stone-500 duration-200 p-2">
            Deals
          </h1>
          <h1 className="text-white cursor-pointer rounded-md hover:bg-stone-500 duration-200 p-2">
            Partner Merchants
          </h1>
          <h1 className="text-white cursor-pointer rounded-md hover:bg-stone-500 duration-200 p-2">
            Stories
          </h1>
          <h1 className="text-white cursor-pointer rounded-md hover:bg-stone-500 duration-200 p-2">
            Careers
          </h1>
          <button className="bg-white px-5 py-2 font-medium rounded-xl text-black cursor-pointer hover:bg-white/85 duration-200">
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
