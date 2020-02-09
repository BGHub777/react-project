import React, { useState } from 'react';
import Styled from 'styled-components';

const NavContainer = Styled.div`
    display: flex;
    flex-direction: column;
`
const NavItemContainer = Styled.div`
    @media (max-width: 991px){
        margin: 0 0% 0 70%; 
    }
    @media (min-width: 992px){
        margin: 0 0 0 36%;
    }
`
const StyledName = Styled.a`

`


const NavBar = () => {

    return (
        <NavContainer>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <StyledName className="navbar-brand text-white text-uppercase" href="#">Brandon's Portfolio</StyledName>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <NavItemContainer>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <a className="nav-link text-white text-uppercase ml-5" href="#">About&nbsp;<i class="fas fa-user-circle"></i><span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white text-uppercase ml-5" href="#">Projects&nbsp;<i class="fas fa-wrench"></i></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white text-uppercase ml-5" href="#" tabindex="-1" aria-disabled="true">Contact&nbsp;<i class="fas fa-phone"></i></a>
      </li>
    </ul>
  </div>
  </NavItemContainer>
</nav>
</NavContainer>
    );
}


export default NavBar;

