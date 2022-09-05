import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const url = location.pathname.slice("1");
  const login = url === "login";
  const signup = url === "signup";
  const search = login || signup;

  const isOpenModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      {/* DEKTOP NAVBAR */}
      <nav className="navbar">
        <div className="left_section">
          <NavLink to={"/"}>
            <h1>HOUSES</h1>
          </NavLink>

          {!search && (
            <div className="search">
              <input placeholder="Address" />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className="right_section">
          <div className="register">
            {!login && <NavLink to="/login">Log In</NavLink>}
            {!signup && <NavLink to="/signup">Sign Up</NavLink>}
          </div>
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="mobile-navbar">
        <NavLink to={"/"}>
          <h1>H</h1>
        </NavLink>

        <div className="search">
          <input placeholder="Address" />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        <button className="open-menu-btn" onClick={() => isOpenModal()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </nav>
      <div className="mobile-menu" style={{ width: !isOpen ? "0%" : "70%" }}>
        <div className="mobile-menu-header">
          <h2>HOUSES</h2>
        </div>
        <div className="register">
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
