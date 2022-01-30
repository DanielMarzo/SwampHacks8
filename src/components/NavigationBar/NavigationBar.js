import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"
import "./NavigationBar.css";
//import "./Profile.js";



const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=6da9565436194a5ca8abce98146de59b&response_type=code&redirect_uri=http://localhost:3000/profile&scope=user-top-read%20playlist-modify-public%20user-read-recently-played%20user-library-modify&response_type=token&show_dialog=true"

const NavigationBar = () => {
  const handleClick = () =>{
    window.open(AUTH_URL);
  }
  return (
    <header className="NavigationBar">
      <img className="logo" src={logo} alt="Logo" />

      <nav className="nav">
        <ul>

          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/profile">
            <li>Profile</li>
          </Link>

        </ul>
        </nav>

        {/* <div className="signInButton">
        <Link to="/signIn" style = {{textDecoration: 'none'}}>
          <button onClick ={handleClick}> Sign In</button>
        </Link>
        </div> */}

    </header>
  );
};

export default NavigationBar;