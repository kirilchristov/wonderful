import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

//change this to come from the state
const initials = 'RM'

function Header(){
  return (
    <div className="header">
      <Navbar sticky="top" bg="white" expand="lg">
        <Navbar.Brand href="https://lexus.com"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="menu-item" href="#home">HOME</Nav.Link>
            <Nav.Link className="menu-item" href="#about">ABOUT</Nav.Link>
            <Nav.Link className="menu-item" href="#contact">CONTACT</Nav.Link>
          </Nav>
          <Nav>
          <Nav className="mr-auto">
            <Nav.Link className="profile-badge-text" href="#profile">Richard Montgomery</Nav.Link>
            <Nav.Link href="#home" className="profile-badge profile-badge-text">{initials}</Nav.Link>
          </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

