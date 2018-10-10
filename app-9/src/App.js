import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link} from "react-router-dom";
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Link to="/">Home</Link>
        <Link to="/Signup">Signup</Link>
        <Link to="/Details">Details</Link>
          {routes}
      </div>
        </Router>
    );
  }
}

export default App;
