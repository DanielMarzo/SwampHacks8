import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"
import "./NavigationBar.css";

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=6da9565436194a5ca8abce98146de59b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming"

const NavigationBar = () => {
  const handleClick = () =>{
    window.open(AUTH_URL);
  }
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
          <button onClick ={handleClick}> Sign In</button>
        </Link>

    </header>
  );
};

export default NavigationBar;