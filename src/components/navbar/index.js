

import React from "react";

import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const Navigation = () => {
	return (
   <Navbar bg="light" expand="lg">
    <Navbar.Brand>
      <h1 class="nav-bar-title">Name of product</h1>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav.Link as={Link} to='/' exact>Home</Nav.Link>
    <Nav.Link as={Link} to='/' exact>About</Nav.Link>
    <Nav.Link as={Link} to='/' exact>Buy now</Nav.Link>
  </Navbar.Collapse>
   </Navbar>


	);
};

export default Navigation;
