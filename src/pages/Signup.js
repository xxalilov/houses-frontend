import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useRequest from "../hooks/use-request";
import AuthContext from "../store/auth-context";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const { doRequest, errors } = useRequest({
    url: "/auth/signup",
    method: "post",
    body: {
      name,
      email,
      phone,
      password,
    },
    onSuccess: (data) => {
      let token = data.token;
      const expirationTime = new Date(
        new Date().getTime() + +30 * 24 * 60 * 1000
      );

      authCtx.login(token, expirationTime.toISOString());

      console.log(authCtx.isLoggedIn);

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
        <h1>Sign Up</h1>
      </div>
      {errors &&
        errors.map((err) => (
          <p style={{ color: "red" }} key={err.field}>
            {err.message}
          </p>
        ))}
      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="label">
            <label>Name</label>
            <input type={"text"} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="label">
            <label>Email</label>
            <input type={"email"} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="label">
            <label>Phone</label>
            <input type={"number"} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="label">
            <label>Password</label>
            <input
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="login-bottom">
          Have you already an account?
          <NavLink to={"/login"}> Signin now</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
