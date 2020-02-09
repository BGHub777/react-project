import React, { useState } from 'react';
import Styled from 'styled-components';
import { Link } from "react-router-dom";

const NavItemContainer = Styled.div`
    @media (max-width: 991px){
        margin: 0 0% 0 70%; 
    }
    @media (min-width: 992px){
        margin: 0 0 0 36%;
    }
    @media (min-width: 1200px){
        margin: 0 0 0 40%;
    }
    @media (min-width: 1300px){
        margin: 0 0 0 44%;
    }
    @media (min-width: 1400px){
        margin: 0 0 0 48%;
    }
    @media (min-width: 1500px){
        margin: 0 0 0 52%;
    }
    @media (min-width: 1600px){
        margin: 0 0 0 56%;
    }
    @media (min-width: 1700px){
        margin: 0 0 0 60%;
    }
    @media (min-width: 1800px){
        margin: 0 0 0 64%;
    }
    @media (min-width: 1900px){
        margin: 0 0 0 68%;
    }
    @media (min-width: 2000px){
        margin: 0 0 0 69%;
    }
    @media (min-width: 2100px){
        margin: 0 0 0 70%;
    }
`


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <Link to="/" className="navbar-brand text-white text-uppercase" href="#">Brandon's Portfolio</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <NavItemContainer>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <Link to="/about" className="nav-link text-white text-uppercase ml-5" href="#">About&nbsp;<i class="fas fa-user-circle"></i><span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/projects" className="nav-link text-white text-uppercase ml-5" href="#">Projects&nbsp;<i class="fas fa-wrench"></i></Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link text-white text-uppercase ml-5" href="#" tabindex="-1" aria-disabled="true">Contact&nbsp;<i class="fas fa-envelope"></i></Link>
      </li>
    </ul>
  </div>
  </NavItemContainer>
</nav>
    );
}


export default NavBar;

