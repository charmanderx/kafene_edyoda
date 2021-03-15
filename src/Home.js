import React from "react";
import "./App.css";
import logo from "./logo.png";

const Home = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <img src={logo} alt="logo" id="logo" />
          <p id="heading">Kafene</p>
        </div>
        <div className="nav-right">
          <a href="www.google.com" id="nav-links">
            Orders
          </a>
          <a href="www.google.com" id="nav-links">
            Products
          </a>
          <a href="www.google.com" id="nav-links">
            Users
          </a>
        </div>
      </div>
      <div className="login-form">
        <h2>Sign In</h2>
        <input
          className="login-input"
          type="text"
          name="username"
          placeholder="Enter Username"
        />
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <input type="submit" value="Login" className="login-btn" />
      </div>
    </>
  );
};

export default Home;
