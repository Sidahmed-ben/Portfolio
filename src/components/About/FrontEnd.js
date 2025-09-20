import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiRedux } from "react-icons/si";
import { Icon } from "@iconify/react";

function FrontEnd() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="mdi:react" width="60" height="60" />
        <p style={{ fontSize: "18px" }}> React </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="mdi:angular" width="60" height="60" />
        <p style={{ fontSize: "18px" }}> Angular </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="simple-icons:mui" width="60" height="60" />
        <p style={{ fontSize: "18px" }}> Mui </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="mdi:bootstrap" width="60" height="60" />
        <p style={{ fontSize: "18px" }}> Bootstrap </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux style={{ width: "60px", height: "60px" }} />
        <p style={{ fontSize: "18px" }}> Redux </p>
      </Col>

    </Row>
  );
}

export default FrontEnd;
