import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import AuthContext from "./store/auth-context";
import Layout from "./components/Layout/layout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import "./App.css";
import Signup from "./pages/Signup";
import AddHouse from "./pages/AddHouse";
import House from "./pages/House";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/add-home"
          element={authCtx.isLoggedIn ? <AddHouse /> : <Navigate to={"/"} />}
        />
        <Route path="/house/:id" element={<House />} />
      </Routes>
    </Layout>
  );
}

export default App;
