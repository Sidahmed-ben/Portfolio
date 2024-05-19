import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";

function GestProj() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="mdi:github" width="60" height="60" />
        <p style={{ fontSize: "18px" }}> Github </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="mdi:jira" width="40" height="40" />
        <p style={{ fontSize: "18px" }}> Jira </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="simple-icons:confluence" width="40" height="40" />
        <p style={{ fontSize: "18px" }}> Confluence </p>
      </Col>
    </Row>
  );
}

export default GestProj;
