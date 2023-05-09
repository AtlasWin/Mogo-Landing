import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "../Drawer/Drawer";

function Navbar() {
  const [toggle, setToogle] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar-name">
            <p className="text-logo">MoGo</p>
          </div>
          <div className="navbar-links">
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Service</a>
              </li>
              <li>
                <a href="/">Work</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-hamburger">
            <GiHamburgerMenu
              color="#fff"
              size={20}
              onClick={() => setToogle(!toggle)}
            />
          </div>
          <div className="navbar-icons">
            <div>
              <AiOutlineShoppingCart />
            </div>
            <div>
              <AiOutlineSearch />
            </div>
          </div>
        </div>
      </div>
      <div>{toggle && <Drawer />}</div>
    </>
  );
}

export default Navbar;
