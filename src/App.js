// initial
import React, { Component } from 'react';
import './App.css';

// components
import Multiply from './containers/Multiply';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Multiply />
      </div>
    );
  }
}

export default App;
