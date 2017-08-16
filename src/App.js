import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Copy Run Modify.
        </p>
        <Welcome name="my name"/>
      </div>
    );
  }
}

export default App;
