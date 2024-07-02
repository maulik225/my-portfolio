// src/components/EducationAndWork.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Eduex.css';
import unipd from "../Assets/unipd_logo.png";
import gtu from "../Assets/gtu_logo.png";
import alita from "../Assets/alita_infotech_pvt_ltd_logo.jpg";
import melzo from "../Assets/melzoguru_logo.jpg";
import logicwind from "../Assets/logicwind_logo.jpg"

const educationData = [
  {
    id: 1,
    degree: "Master's in Computer Engineering (AI and Robotics)",
    institution: 'University Of Padova',
    location: 'Padova, Italy',
    year: 'Oct 2022 - April 2025',
    logo: unipd,
  },
  {
    id: 2,
    degree: "Bachelor's in Computer Engineering",
    institution: 'Gujarat Technological University',
    location: 'Surat, India',
    year: 'Aug 2016 - Aug 2020',
    logo: gtu,
    // cgpa: 'CGPA: 7.94',
  },
];

const workData = [
  {
    id: 1,
    position: 'Full-Stack Web Developer',
    company: 'Alita Infotech',
    location: 'Surat, India',
    year: 'Nov 2021 - Aug 2022',
    logo:alita,
    description: [
      'Leveraged Node.js and Puppeteer for data scraping, providing meaningful insights to stakeholders.',
      'Created web applications using ReactJS and VueJS, incorporating responsive design principles.',
      'Ensured high code quality through best practices in user interface design and development.',
      'Collaborated with cross-functional teams to deliver solutions in a dynamic, evolving environment.',
    ],
  },
  {
    id: 2,
    position: 'Full-Stack Web Developer',
    company: 'Melzo',
    location: 'Surat, India',
    year: 'Feb 2021 - Jun 2021',
    logo: melzo,
    description: [
      'Utilized advanced MERN stack techniques to create user-friendly landing pages, dashboards, and online applications.',
      'Employed agile methodologies for continuous improvement and rapid iteration.',
      'Maintained high standards for code quality, documentation, and testing.',
    ],
  },
  {
    id: 3,
    position: 'Python Developer Intern',
    company: 'Logicwind',
    location: 'Surat, India',
    year: 'Jan 2020 - Apr 2020',
    logo: logicwind,
    description: [
      'Applied NLP and computer vision technologies to develop innovative software solutions.',
      'Utilized machine learning and AI techniques to deliver scalable solutions exceeding user expectations.',
      'Focused on sustainable engineering practices, including thorough testing and documentation.',
    ],
  },
];

const Eduex = () => {
  return (
    <Container id="education-work" className="my-5">
      <Row>
        <Col md={6} className="mb-4">
          <h2 className="text-light">Education</h2>
          {educationData.map((education) => (
            <Card key={education.id} className="bg-dark text-light mb-3">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={education.logo}
                    alt={education.institution}
                    className="education-logo"
                  />
                  <div className="ml-3 card-content">
                    <Card.Title>{education.degree}</Card.Title>
                    <Card.Subtitle className="mb-2 ">
                      {education.institution}
                    </Card.Subtitle>
                    <Card.Text>{education.location}</Card.Text>
                    <Card.Text>{education.year}</Card.Text>
                    {education.cgpa && <Card.Text>{education.cgpa}</Card.Text>}
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={6} className="mb-4">
          <h2 className="text-light">Work Experience</h2>
          {workData.map((work) => (
            <Card key={work.id} className="bg-dark text-light mb-3">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={work.logo}
                    alt={work.company}
                    className="work-logo"
                  />
                  <div className="ml-3 card-content">
                    <Card.Title>{work.position}</Card.Title>
                    <Card.Subtitle className="mb-2 ">
                      {work.company}
                    </Card.Subtitle>
                    <Card.Text>{work.location}</Card.Text>
                    <Card.Text>{work.year}</Card.Text>
                    {/* {work.description.map((desc, index) => (
                      <Card.Text key={index}>{desc}</Card.Text>
                    ))} */}
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Eduex;
