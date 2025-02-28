import React from "react";

const Navbar = () => {
  return (
    <div>
      <div >
        <div>
          <p>QASH</p>
        </div>
        <div className="flex items-center">
          <h1>Home</h1>
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
          <h1>Deals</h1>
          <h1>Partner Merchants</h1>
          <h1>Stories</h1>
          <h1>Careers</h1>
          <button>Download Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
