import React from 'react';
import Particles from 'react-particles-js';

const particleOpt = {
  particles: {
    number: {
      value: 750,
      density: {
        enable: true,
        value_area: 10000
      }
    }
  }
}


const ParticlesBackground = () => {

    return (
        <Particles params={particleOpt} />
        )
}

export default ParticlesBackground;