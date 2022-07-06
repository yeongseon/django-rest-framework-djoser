import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Activate from "./containers/Activate";
import ResetPassword from "./containers/ResetPassword";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/reset_password" element={<ResetPassword />}></Route>
        <Route
          path="/password/reset/confirmation/:uid/:token"
          element={<ResetPasswordConfirm />}
        ></Route>
        <Route path="/activate/:uid/:token" element={<Activate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
