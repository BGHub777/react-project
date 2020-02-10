import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const NewNav = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand className="mr-auto">Brandon's Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink><Link to="/about" className="colorfix1" onClick={toggleNavbar}>About&nbsp;<i className="fas fa-user-circle"></i></Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/projects" className="colorfix1" onClick={toggleNavbar}>Projects&nbsp;<i className="fas fa-wrench"></i></Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/contact" className="colorfix1" onClick={toggleNavbar}>Contact&nbsp;<i className="fas fa-envelope"></i></Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NewNav;