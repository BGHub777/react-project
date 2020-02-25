import React from 'react';
import Particles from 'react-particles-js';
import Pic1 from '../assets/pic1.jpg';
import Pic2 from '../assets/pic2.jpg';
import Pic3 from '../assets/pic3.jpg';
import Pic4 from '../assets/pic4.jpg';
import Pic5 from '../assets/pic5.jpg';
import Pic6 from '../assets/pic6.jpg';
import Pic7 from '../assets/pic7.jpg';
import Pic8 from '../assets/pic8.jpg';
import Pic9 from '../assets/pic9.jpg';
import Pic10 from '../assets/pic10.jpg';


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
      <div>
        <div style={{margin: "1% 15% 1% 15%", display: "flex", flexDirection: "column", alignItems: "center",}}>
          
          <h2>Welcome to my Portfolio</h2>
        
          <hr style={{width: "100%", margin:"1.5% 0 1.75% 0"}}></hr>
          <div className="flex">
          <img className="pictures25" src={Pic7} alt="" />
          <img className="pictures25" src={Pic8} alt="" />
          <img className="pictures25" src={Pic9} alt="" />
          <img className="pictures25" src={Pic10} alt="" />
          </div>
          <div className="flex">
          <img className="pictures333" src={Pic1} alt="" />
          <img className="pictures333" src={Pic2} alt="" />
          <img className="pictures333" src={Pic3} alt="" />
          </div>
          <div className="flex">
          <img className="pictures100" src={Pic5} alt="" />
          </div>
          <div className="flex">
          <img className="pictures50" src={Pic4} alt="" />
          <img className="pictures50" src={Pic6} alt="" />
          </div>
          
          
        </div>
        <Particles params={particleOpt} />
      </div>
        )
}

export default ParticlesBackground;