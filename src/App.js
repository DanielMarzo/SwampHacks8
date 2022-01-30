import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import NavigationBar from './components/NavigationBar';
import Hero from "./components/Hero";
import styled from "styled-components";


const App = () => {
  return (
    <Router>
      <NavigationBar />

      <Switch>
        <Route path="/profile" activeStyle>
          <h1>Welcome!</h1>
        </Route>

        <Route path="/signIn" activeStyle>

 
        <Hero />
        </Route>

        <Route path="/" activeStyle>
          <div className="App">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <Hero />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};
//Hello everyone this is a test comment
export default App;
