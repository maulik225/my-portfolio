// src/components/Contact.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container id="contact" className="my-5 text-light">
      <h2>Contact</h2>
      <p>Feel free to reach out via social media or email.</p>
      <ul>
        <li>Facebook: Software Engineer</li>
        <li>Twitter: Software Engineer</li>
      </ul>
    </Container>
  );
};

export default Contact;
