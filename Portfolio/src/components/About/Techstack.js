import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Techstack.css"; // Import the CSS file

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((icon, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="tech-icon-container">
            <img src={icon.src} alt={icon.alt} className="tech-icon" />
            <span className="tooltip-text">{icon.alt}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

const techIcons = [
  { src: "https://img.icons8.com/?size=48&id=40670&format=png&color=000000", alt: "C" },
  { src: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png", alt: "C++" },
  { src: "https://img.icons8.com/color/48/000000/python.png", alt: "Python" },
  { src: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png", alt: "Java" },
  { src: "https://img.icons8.com/color/48/000000/javascript.png", alt: "JavaScript" },
  { src: "https://img.icons8.com/color/48/000000/typescript.png", alt: "TypeScript" },
  { src: "https://img.icons8.com/color/48/000000/react-native.png", alt: "ReactJS" },
  { src: "https://img.icons8.com/?size=48&id=20909&format=png&color=000000", alt: "HTML" },
  { src: "https://img.icons8.com/?size=48&id=3BTBsJs5myRy&format=png&color=000000", alt: "CSS" },
  { src: "https://img.icons8.com/color/48/000000/redux.png", alt: "Redux" },
  { src: "https://img.icons8.com/color/48/000000/nodejs.png", alt: "Node.js" },
  { src: "https://img.icons8.com/?size=48&id=90519&format=png&color=000000", alt: "Spring Boot" },
  { src: "https://img.icons8.com/?size=48&id=IuuVVwsdTi2v&format=png&color=000000", alt: "Django" },
  { src: "https://img.icons8.com/color/48/000000/mysql.png", alt: "MySQL" },
  { src: "https://img.icons8.com/color/48/000000/mongodb.png", alt: "MongoDB" },
  { src: "https://img.icons8.com/color/48/000000/firebase.png", alt: "Firebase" },
  { src: "https://img.icons8.com/?size=48&id=fOhLNqGJsUbJ&format=png&color=000000", alt: "Apache Kafka" },
  { src: "https://img.icons8.com/?size=48&id=cdYUlRaag9G9&format=png&color=000000", alt: "Docker" },
];

export default Techstack;
