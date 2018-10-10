import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from "./routes";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
