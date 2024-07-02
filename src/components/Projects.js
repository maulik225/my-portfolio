import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./Projects.css"
import Robust from "../Assets/robust_network.png"
import flood from "../Assets/flood_detect.png"
import numberpuzzle from "../Assets/numberpuzzle.png"
import spellchecker from "../Assets/spellchecker.png"
import sagebot from "../Assets/sagebot.png"
import imdb from "../Assets/imdb.png"
import recipe from "../Assets/recipe.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
} from "@fortawesome/free-brands-svg-icons";


const projects = [
    { id: 1, title: 'Recommendation system', description: `Built a content-based Movie Recommendation System using Scikit-learn for ML, FastAPI for API, and React for frontend. Created an IMDb-like clone with personalized recommendations, leveraging machine learning algorithms to analyze movie data.`, tech: ['Python', 'FastAPI', 'scikit-learn', 'React','HTML','css','JS',], img: imdb,link:"https://github.com/maulik225/ml_api" },
    { id: 2, title: 'Flood detection', description: 'The project aims at identifying floods based on images supplied. In the past decade, reported annual losses from floods have reached tens of billions of US dollars and thousands of people were killed each year. Natural disasters are frequent in this time and era. Flash floods are becoming common now due to climate change. We aim to make planning after a flood easy for the authorities. This allows for easy flood relief operations and rescue.', tech: ['Python','pytorch','tansorflow','streamlit','matplotlib'], img: flood,link:"https://github.com/MojammelHossain/flood_detection" },
    { id: 3, title: 'Sagebot', description: 'Developed SageBot, an intuitive chatbot leveraging NLP to enhance digital accessibility for individuals with limited computer proficiency. Utilized Flask to build a user-friendly interface with rate-limiting features, ensuring efficient and secure interactions.', tech: ['React', 'Flask','scikit-learn','numpy','HTML','css','JS','Firebase'], img: sagebot,link:"https://github.com/maulik225/SageBot_backend" },
    { id: 4, title: 'Spellchecker', description: 'Developed a multilingual spellchecker API using Flask and Hunspell, providing robust spell-checking capabilities in English, French, and Italian. The API supports both GET and POST methods for checking and suggesting corrections, ensuring versatile and accurate spellchecking for diverse language needs.', tech: ['python', 'Flask','hunspell'], img: spellchecker ,link:"https://github.com/maulik225/spellcheckerAPI-Using-Flask"},
    { id: 5, title: 'Robustness of Network', description: 'This project explores and compares various robustness metrics for road networks, analyzing their behavior under random and targeted attacks. By evaluating road networks in Italy, Germany, and Great Britain, we aim to enhance the understanding and practical application of robustness measures.', tech: ['Python','Networkx','Graphs','python-louvain','matplotlib'], img: Robust ,link:"https://github.com/maulik225/Robustness-of-network/blob/main/lfn_final_project.ipynb"},
    { id: 6, title: 'Recipe sharing platform', description: 'This project involves creating a Recipe Sharing Platform with a robust back end to facilitate seamless data exchange. The platform enables users to create, share, and save recipes, fostering an interactive community for culinary enthusiasts.', tech: ['Java', 'Servlets','HTML','css','Bootstrap','JS','postgresql'], img: recipe },
    { id: 7, title: 'Numberpuzzle', description: 'Developed as part of a project, this Numberpuzzle game challenges players to arrange random numbers in order. The game focuses on enhancing problem-solving skills through an engaging and interactive interface.', tech: ['React','HTML','css','JS'], img: numberpuzzle,link:"https://numberpuzzle-1a88c.web.app/" },
    // Add more projects as needed
  ];
  

// Function to assign different colors based on technology
const getBadgeVariant = (tech) => {
  switch (tech.toLowerCase()) {
    case 'python':
      return 'bg-primary';
    case 'html':
      return 'bg-secondary';
    case 'css':
      return 'bg-success';
    case 'react'||'reactjs':
      return 'bg-info';
    case 'pytorch':
      return 'bg-danger';
    case 'js':
      return 'bg-warning';
    default:
      return 'bg-light text-dark'; // Default color for unknown tech
  }
};

const Projects = () => {
  return (
    <Container id="projects" className="my-5 projects">
      <h2 className="text-light project-title">Projects</h2>
      <Row>
        {projects.map((project, i) => (
          <Col md={4} key={project.id} className="mb-4">
            <Card className="bg-dark text-light h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <div className="mb-3">
                  <img src={project.img} alt="Project" className="img-fluid" />
                </div>
                <Card.Text>{project.description}</Card.Text>
                <div className="mt-auto">
                  <div className="tags mb-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className={`badge ${getBadgeVariant(tech)}`}>{tech}</span>
                    ))}
                  </div>
                  <Button className='github-btn' href={`${project.link}`} target="_blank">
                  <FontAwesomeIcon
									icon={faGithub}
									className="about-social-icon"
								/>
                    GitHub Repo <i className="bi bi-github ms-1"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
