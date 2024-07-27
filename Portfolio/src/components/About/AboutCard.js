import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Girish G Gonda </span>
            from <span className="purple"> Udupi, Karnataka, India.</span>
            <br />
            <br/>
            I have completed B.Tech in Computer Science & Engineering from PES University, Bangalore.
            <br />
            I have 6 months of Internship experience in <span className="purple">Mobile App Development </span> at <span className="purple">Quicken Software Pvt. Ltd.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "My passion lies in creating technologies that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Girish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
