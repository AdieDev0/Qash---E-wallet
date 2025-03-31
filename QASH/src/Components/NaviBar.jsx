import React, { useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sidebar animation variants
  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  return (
    <div className="bg-stone-800 px-4 sm:px-40 py-2">
      <div className="flex items-center justify-between">
        <div>
          {/* TEXT LOGO */}
          <p className="text-5xl text-purple-400 font-extrabold cursor-pointer font-madi">
            QASH
          </p>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button onClick={toggleSidebar} className="text-white">
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden sm:flex items-center gap-3">
          <NavLink to="/">
            <h1 className="text-white cursor-pointer rounded-md font-medium hover:bg-stone-500 duration-300 p-2 font-inter text-sm">
              Home
            </h1>
          </NavLink>

          {/* HOVER BUTTON */}
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="m-1 flex items-center text-white font-bold gap-1 cursor-pointer rounded-md hover:bg-stone-500 duration-300 p-2 font-inter text-sm"
            >
              Services <FaAngleDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a className="text-black/80 font-inter font-medium">Transfer</a>
              </li>
              <li>
                <a className="text-black/80 font-inter font-medium">Grow</a>
              </li>
              <li>
                <a className="text-black/80 font-inter font-medium">Load</a>
              </li>
              <li>
                <a className="text-black/80 font-inter font-medium">Sell</a>
              </li>
              <li>
                <a className="text-black/80 font-inter font-medium">Shop</a>
              </li>
              <li>
                <a className="text-black/80 font-inter font-medium">
                  Explore all feature
                </a>
              </li>
            </ul>
          </div>
          {/* HOVER BUTTON 2 */}
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="m-1 flex items-center text-white gap-1 font-medium cursor-pointer rounded-md hover:bg-stone-500 duration-300 p-2 font-inter text-sm"
            >
              User Guide <FaAngleDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a className="text-black/80 font-inter font-medium">Acount Limits</a>
              </li>
              <li>
                <a className="text-black/80 font-inter font-medium">Activate Virtual Card</a>
              </li>
              <li>
                <a className="text-black/80 font-inter font-medium">Activate Virtual Card</a>
              </li>
            </ul>
          </div>
          <h1 className="text-white cursor-pointer rounded-md font-medium hover:bg-stone-500 duration-300 p-2 font-inter text-sm">
            Deals
          </h1>
          <h1 className="text-white cursor-pointer rounded-md font-medium hover:bg-stone-500 duration-300 p-2 font-inter text-sm">
            Partner Merchants
          </h1>
          <h1 className="text-white cursor-pointer rounded-md font-medium hover:bg-stone-500 duration-300 p-2 font-inter text-sm">
            Stories
          </h1>
          <h1 className="text-white cursor-pointer rounded-md font-medium hover:bg-stone-500 duration-300 p-2 font-inter text-sm">
            Careers
          </h1>
          <button className="bg-white px-5 py-2 font-medium rounded-xl text-black cursor-pointer hover:bg-white/85 duration-300 font-inter text-sm">
            Download Now
          </button>
        </div>
      </div>

      {/* Mobile Sidebar with Framer Motion */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-stone-900 z-50"
          >
            <div className="p-4">
              <p className="text-5xl text-purple-700 font-extrabold cursor-pointer font-madi">
                QASH
              </p>
            </div>
            <div className="flex flex-col p-4">
              <h1 className="text-white cursor-pointer rounded-md hover:bg-stone-500 duration-300 p-2 font-inter text-sm">
                Home
              </h1>
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 flex items-center text-white gap-1 cursor-pointer rounded-md hover:bg-stone-500 duration-300 p-2 font-inter text-sm"
                >
                  Services <FaAngleDown />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a className="text-black/80 font-inter font-medium">
                      Transfer
                    </a>
                  </li>
                  <li>
                    <a className="text-black/80 font-inter font-medium">Grow</a>
                  </li>
                  <li>
                    <a className="text-black/80 font-inter font-medium">Load</a>
                  </li>
                  <li>
                    <a className="text-black/80 font-inter font-medium">Sell</a>
                  </li>
                  <li>
                    <a className="text-black/80 font-inter font-medium">Shop</a>
                  </li>
                  <li>
                    <a className="text-black/80 font-inter font-medium">
                      Explore all feature
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 flex items-center text-white gap-1 cursor-pointer rounded-md hover:bg-stone-500 duration-300 p-2 font-inter text-sm"
                >
                  User Guide <FaAngleDown />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a className="text-black/80 font-medium font-inter">
                      Item 1
                    </a>
                  </li>
                  <li>
                    <a className="text-black/80 font-medium font-inter">
                      Item 2
                    </a>
                  </li>
                </ul>
              </div>
              <h1 className="text-white cursor-pointer rounded-md hover:bg-stone-500 duration-300 p-2 font-inter text-sm">
                Deals
              </h1>
              <h1 className="text-white cursor-pointer rounded-md hover:bg-stone-500 duration-300 p-2 font-inter text-sm">
                Partner Merchants
              </h1>
              <h1 className="text-white cursor-pointer rounded-md hover:bg-stone-500 duration-300 p-2 font-inter text-sm">
                Stories
              </h1>
              <h1 className="text-white cursor-pointer rounded-md hover:bg-stone-500 duration-300 p-2 font-inter text-sm">
                Careers
              </h1>
              <button className="bg-white px-5 py-2 font-medium rounded-xl text-black cursor-pointer hover:bg-white/85 duration-300 font-inter text-sm mt-4">
                Download Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
