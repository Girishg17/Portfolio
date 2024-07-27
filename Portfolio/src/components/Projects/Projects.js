import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import task from "../../Assets/Projects/task.png";

import sumz from "../../Assets/Projects/sumz.png";

import vidhive from "../../Assets/Projects/vidhive.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="TaskManager"
              description="simple task management web app which can track your daily tasks.it includes Google Sign In , drag and drop particular tasks, edit and save tasks, delete tasks. Which also has Protected Routes and Authentication."
              ghLink="https://github.com/Girishg17/Voosh"
              demoLink="https://66a20eba65ce06db9cdcbbbb--playful-chimera-9b793b.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vidhive}
              isBlog={false}
              title="VidHive"
              description="The VidHive is an YouTube Clone App features seamless YouTube video playback, advanced search functionality to find specific videos, and a categorized video display for easy browsing and discovery"
              ghLink="https://github.com/Girishg17/VidHive"
              demoLink="https://unrivaled-sunflower-3ef2ea.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sumz}
              isBlog={false}
              title="Sumz"
              description="It is an AI based web app designed to simplify the reading of long open-source articles. This app accepts article links, parses the content, and generates concise summaries within the article itself, presenting the information in a clear and structured format."
              ghLink="https://github.com/Girishg17/get_summary"
              demoLink="https://polite-faun-cce79b.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Blog Web"
              description="Designed a robust backend application for a standard blog platform. This application manages various functionalities such as accepting user posts, allowing comments on posts, deleting posts, and categorizing content. It is built with high security in mind, utilizing Spring Security to ensure a safe and reliable user experience."
              ghLink="https://github.com/Girishg17/BlogWeb-Backend"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
