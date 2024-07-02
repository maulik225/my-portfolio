// src/components/Contact.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <Container id="contact" className="my-5">
      <h2 className="text-light text-center mb-4">Contact Me</h2>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card className="bg-dark text-light text-center contact-card">
            <Card.Body>
              <Card.Title>Email</Card.Title>
              <Card.Text>
                <a href="mailto:youremail@example.com" className="text-light">youremail@example.com</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="bg-dark text-light text-center contact-card">
            <Card.Body>
              <Card.Title>LinkedIn</Card.Title>
              <Card.Text>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-light">linkedin.com/in/yourlinkedin</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="bg-dark text-light text-center contact-card">
            <Card.Body>
              <Card.Title>GitHub</Card.Title>
              <Card.Text>
                <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-light">github.com/yourgithub</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="text-center mt-4">
        <Col>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="contact-icon mx-3">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="contact-icon mx-3">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="mailto:youremail@example.com" className="contact-icon mx-3">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
