import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-header">
        <h1>Log In</h1>
      </div>
      <div className="form">
        <form>
          {/* <div className="label">
            <label>Name</label>
            <input type={"text"} />
          </div> */}
          <div className="label">
            <label>Email</label>
            <input type={"email"} />
          </div>
          {/* <div className="label">
            <label>Phone</label>
            <input type={"number"} />
          </div> */}
          <div className="label">
            <label>Password</label>
            <input type={"password"} />
          </div>
          {/* <div className="label">
            <label>Confirm Password</label>
            <input type={"password"} />
          </div> */}
          <button>Log In</button>
        </form>
        <div className="login-bottom">
          Not a member? <NavLink to={"/signup"}> Signup now</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
