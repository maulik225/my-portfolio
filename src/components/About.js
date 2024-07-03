// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profileImg from '../avtar.jpeg'; // Replace with the correct path to your image
import "./About.css"
import { motion } from "framer-motion"

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <Container id="about" className="header-text my-5 text-light about-section about-container">
      <Row className="align-items-center">
        <Col md={6}>
        <div className="about-content">
          <h1>Hello! I'm Maulik Sompura 👋</h1>
          <p>A passionate software engineer specializing in AI, machine learning, and full-stack web development, I am currently pursuing my Master's degree in Computer Engineering with a focus on AI and Robotics at the University of Padova in Italy.</p>
        </div>
        </Col>
        <Col md={6}>
        <div className='right-side-img-container'>
        <div className="profile-container">
            <div className='profile-wrapper'>
                <motion.img initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
  transition={{ ease: [0.17, 0.67, 0.83, 0.67] , duration: 3} }  src={profileImg} alt="Profile" className="img-fluid" />
            </div>
        </div>
        </div>
        </Col>
        <div className='about-socials'>
							<a
								href="https://github.com/maulik225"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="about-social-icon"
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/maulik-sompura-15453418b/"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="about-social-icon"
								/>
							</a>
							<a
								href="https://www.instagram.com/maulik._.s/"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="about-social-icon"
								/>
							</a>
							<a
								href={`mailto:msompura0@gmail.com`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="about-social-icon"
								/>
							</a>
        </div>
      </Row>
    </Container>
  );
};

export default About;

