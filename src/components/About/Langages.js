import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";

function Langages() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="akar-icons:typescript-fill" width="40" height="40" />
        <p style={{ fontSize: "18px" }}> Typescript </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="akar-icons:javascript-fill" width="40" height="40" />
        <p style={{ fontSize: "18px" }}> Javascript </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="akar-icons:python-fill" width="40" height="40" />
        <p style={{ fontSize: "18px" }}> Python </p>
      </Col>
    </Row>
  );
}

export default Langages;
