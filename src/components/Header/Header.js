import React, { useState, useContext, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import useRequest from "../../hooks/use-request";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  const url = location.pathname.slice("1");
  const login = url !== "login" && !authCtx.isLoggedIn;
  const signup = url !== "signup" && !authCtx.isLoggedIn;

  const { doRequest, errors } = useRequest({
    url: "/auth/currentuser",
    method: "get",
    body: {},
    headers: {
      Authorization: `Bearer ${authCtx.token}`,
    },
    onSuccess: (data) => {
      setIsAdmin(data.data.isAdmin);
    },
  });

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      getUserDatas();
    }
  }, [authCtx.isLoggedIn]);

  const getUserDatas = async () => {
    console.log(errors);
    await doRequest();
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    navigate(`/?search=${searchValue}`);
  };

  const isOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const signOutHandler = () => {
    authCtx.logout();
    navigate("/");
  };

  return (
    <header className="header">
      {/* DESKTOP NAVBAR */}
      <nav className="navbar">
        <div className="left_section">
          <NavLink to={"/"}>
            <h1>HOUSES</h1>
          </NavLink>

          <div className="search">
            <form onSubmit={searchSubmit}>
              <input
                placeholder="Address"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button type="submit">
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
            </form>
          </div>
        </div>
        <div className="right_section">
          <div className="register">
            {login && <NavLink to="/login">Log In</NavLink>}
            {signup && <NavLink to="/signup">Sign Up</NavLink>}
            {isAdmin && authCtx.isLoggedIn ? (
              <NavLink to={`/add-home`}>Add Home</NavLink>
            ) : (
              ""
            )}
            {authCtx.isLoggedIn && (
              <button className="link" onClick={signOutHandler}>
                Sign Out
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="mobile-navbar">
        <NavLink to={"/"}>
          <h1 style={{ fontSize: "28px" }}>H</h1>
        </NavLink>

        <div className="search">
          <form onSubmit={searchSubmit}>
            <input
              placeholder="Address"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit">
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
          </form>
        </div>
        <button className="open-menu-btn" onClick={() => isOpenModal()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
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
      <div className="mobile-menu" style={{ width: !isOpen ? "0" : "70%" }}>
        {isOpen && (
          <>
            <div className="mobile-menu-header">
              <h2>HOUSES</h2>
            </div>
            <div className="register">
              {login && (
                <NavLink to="/login" onClick={() => isOpen(false)}>
                  Log In
                </NavLink>
              )}
              {signup && (
                <NavLink to="/signup" onClick={() => isOpen(false)}>
                  Sign Up
                </NavLink>
              )}
              {isAdmin && authCtx.isLoggedIn ? (
                <NavLink to={`/add-home`} onClick={() => isOpen(false)}>
                  Add Home
                </NavLink>
              ) : (
                ""
              )}
            </div>
            <div className="account">
              {authCtx.isLoggedIn && (
                <button
                  className="link"
                  onClick={() => {
                    signOutHandler();
                    isOpen(false);
                  }}
                >
                  SignOut
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
