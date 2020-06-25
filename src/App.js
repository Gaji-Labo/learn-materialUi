import React from 'react';
import './App.css';

import Buttons from './containers/Buttons'
import Calculator from './containers/Calculator'

function App() {
  return (
    <div className="App">
      <Buttons />
      <div className="container">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
