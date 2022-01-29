import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream
=======
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'
import Hero from "./components/Hero";
import styled from "styled-components";
>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
    //<Login/>
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
>>>>>>> Stashed changes
  );
}
//Hello everyone this is a test comment
export default App;
