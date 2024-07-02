// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import "../../src/styles.css"

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-3">
      <Container className='footer-container'>
      <Nav className="ml-auto">
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#education-work" className="nav-link-custom">Education</Nav.Link>
            <Nav.Link href="#education-work" className="nav-link-custom">Work</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
            {/* <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link> */}
          </Nav>
        <p className="mb-0">&copy; 2024 Maulik Sompura. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
