import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"
import "./NavigationBar.css";


const NavigationBar = () => {
  return (
    <header className="NavigationBar">
      <img class="logo" src={logo} alt="Logo" />

      <nav class="nav">
        <ul>

          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/profile">
            <li>Profile</li>
          </Link>
        </ul>
        </nav>

        <Link to="/signIn">
          <button> Sign In</button>
        </Link>

    </header>
  );
};

export default NavigationBar;