import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useRequest from "../hooks/use-request";
import AuthContext from "../store/auth-context";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const { doRequest, errors } = useRequest({
    url: "/auth/signin",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: (data) => {
      let token = data.token;
      const expirationTime = new Date(
        new Date().getTime() + +30 * 24 * 60 * 1000
      );

      authCtx.login(token, expirationTime.toISOString());

      navigate("/");
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    await doRequest();
  };

  return (
    <div className="login">
      <div className="login-header">
        <h1>Log In</h1>
      </div>
      {errors &&
        errors.map((err) => (
          <p style={{ color: "red" }} key={err.field}>
            {err.message}
          </p>
        ))}
      <div className="form" onSubmit={onSubmit}>
        <form>
          <div className="label">
            <label>Email</label>
            <input type={"email"} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="label">
            <label>Password</label>
            <input
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        <div className="login-bottom">
          Not a member? <NavLink to={"/signup"}> Signup now</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
