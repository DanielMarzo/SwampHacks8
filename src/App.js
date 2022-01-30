import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import "./App.css";
import NavigationBar from './components/NavigationBar';
import Hero from "./components/Hero";
//import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css"
import Profile from "./components/Profile";
//import Dashboard from "./Dashboard"

//const code = new URLSearchParams(window.location.search).get('code')

// function App(){
//   return code ? <Dashboard code = {code} /> : <Login/>
// }

const App = () => {
  //return code ? <Dashboard code={code} /> : <Login />
  return (
    
    <Router> 
      
      <NavigationBar />
      {/* <div className="LoginBG"><Login /> </div> */}
      <Profile />
      
      <Switch>
        <Route path="/profile" activeStyle>
        <div className="profilebg">
            </div>
          </Route>

        <Route path="/signIn" activeStyle>

        {/* <Hero /> */}
        </Route>

        <Hero />
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
