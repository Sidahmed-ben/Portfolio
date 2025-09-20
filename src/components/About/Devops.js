import React from "react";
import { Col, Row } from "react-bootstrap";

import { Icon } from "@iconify/react";
function Devops() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="mdi:docker" width="70" height="70" />
        <p style={{ fontSize: "18px" }}> Docker </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="mdi:bitbucket" width="70" height="70" />
        <p style={{ fontSize: "18px" }}>
          {" "}
          Bitbucket <br></br>CI/CD
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="mdi:github" width="70" height="70" />
        <p style={{ fontSize: "18px" }}>
          GitHub <br></br>Actions
        </p>
      </Col>
    </Row>
  );
}

export default Devops;
