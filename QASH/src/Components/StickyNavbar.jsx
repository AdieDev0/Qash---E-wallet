import React from "react";

const Navbar = () => {
  return (
    <div className="bg-stone-800 px-20">
      <div className="flex items-center justify-between">
        <div>
          {/* TEXT LOGO */}
          <p className="text-5xl text-purple-700 font-extrabold">QASH</p>
        </div>
        <div className="flex items-center gap-5">
          <h1 className="text-white">Home</h1>
          {/* HOVER BUTTON */}
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              Hover
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
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
            <div tabIndex={0} role="button" className="btn m-1">
              Hover
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <h1 className="text-white">Deals</h1>
          <h1 className="text-white">Partner Merchants</h1>
          <h1 className="text-white">Stories</h1>
          <h1 className="text-white">Careers</h1>
          <button className="bg-white px-5 py-2 font-medium rounded-xl text-black cursor-pointer hover:bg-white/85 duration-200">
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
