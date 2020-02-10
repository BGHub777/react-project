import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const NewNav = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">Brandon's Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/about">About&nbsp;<i className="fas fa-user-circle"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects">Projects&nbsp;<i className="fas fa-wrench"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact&nbsp;<i className="fas fa-envelope"></i></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NewNav;