import React from 'react';
import Particles from 'react-particles-js';
import './App.css';

const particleOpt = {
  particles: {
    number: {
      value: 900,
      density: {
        enable: true,
        value_area: 10000
      }
    }
  }
}


function App() {
  return (
    <div className="App">
      <Particles params={particleOpt} />
      <h1> Background Testing --LIVE</h1>
      <Particles params={particleOpt} />
    </div>
  );
}

export default App;
