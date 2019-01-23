import * as React from 'react';
import '../styles/App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// TODO React router

import {Link} from "react-router-dom";
import logo from '../logo.svg';

// const element = <h1>Hello, world</h1>;

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to <b>reload</b>.
        </p>
          <p>
              <Link to={'/'}>Home</Link>
          </p>
      </div>
    );
  }
}

export default App;
