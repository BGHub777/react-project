import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects'

const particleOpt = {
  particles: {
    number: {
      value: 450,
      density: {
        enable: true,
        value_area: 10000
      }
    }
  }
}
/* <Particles params={particleOpt} />
      // <Particles params={particleOpt} /> */

function App() {
  return (
    <div className="App">
    <NavBar />
    <Particles params={particleOpt} />
    <Projects />
    <Particles params={particleOpt} />
    </div>
  );
}

export default App;
