// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css'; // Import custom CSS for the Header
import logo from "../avtar.jpeg"

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          <img
            src={logo} // Replace with your logo path
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          MS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#education-work" className="nav-link-custom">Education</Nav.Link>
            <Nav.Link href="#education-work" className="nav-link-custom">Work</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
            {/* <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
