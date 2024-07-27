import React from "react";
import { Col, Row } from "react-bootstrap";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img src=" https://img.icons8.com/?size=48&id=0OQR1FYCuA9f&format=png&color=000000" alt="Visual Studio" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://img.icons8.com/color/48/000000/git.png" alt="Git" />
     
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.icons8.com/?size=48&id=61466&format=png&color=000000" alt="Intellij IDEA" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.icons8.com/?size=48&id=QEQQKirln6Tf&format=png&color=000000" alt="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.icons8.com/?size=48&id=oROcPah5ues6&format=png&color=000000" alt="Jira" />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
