import React from "react";
import { Route, Redirect, Switch, Routes } from "react-router-dom";

import Layout from "./components/Layout/layout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import "./App.css";
import Signup from "./pages/Signup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Layout>
  );
}

export default App;
