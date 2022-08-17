// SCSS imports
import "./header.scss";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout, reset } from "../../features/userSlice";

// System libraries
import React from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch(userLogout());
    dispatch(reset());
    navigate("/");
  };

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
            <li>
              <Link to="/" className="header__link">
                Cart
              </Link>
            </li>
            {/* <Link to="/login" className="header__link">
              Login
            </Link>
            <Link to="/register" className="header__link">
              Register
            </Link> */}
            {userData ? (
              <>
                <li>
                  <button className="header__link" onClick={logoutHandler}>
                    Logout
                  </button>
                </li>
                <li>
                  <p>Welcome: {userData.name}</p>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="header__link">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="header__link">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
