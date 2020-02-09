import React from 'react';
import Particles from 'react-particles-js';
import Styled from 'styled-components';

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


const ParticlesBackground = () => {

    return (
        <Particles params={particleOpt} />
        )
}

export default ParticlesBackground;