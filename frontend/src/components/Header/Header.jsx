// SCSS imports
import "./header.scss";

// System libraries
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__navigation">
          <Link className="header__logo" to="/">
            KiranaGhar
          </Link>
          <div className="header__search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <ul className="header__links">
            <li>Cart</li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
