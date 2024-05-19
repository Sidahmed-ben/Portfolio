import React from "react";
import { Col, Row } from "react-bootstrap";

import { Icon } from "@iconify/react";
function BackEnd() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Icon
          icon="fluent-mdl2:amazon-web-services-logo"
          width="60"
          height="60"
        />
        <p style={{ fontSize: "18px" }}> AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="teenyicons:nodejs-solid" width="60" height="60" />
        <p style={{ fontSize: "18px" }}> Node js </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="simple-icons:express" width="60" height="60" />
        <p style={{ fontSize: "18px" }}> Express js </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="simple-icons:nestjs" width="60" height="60" />
        <p style={{ fontSize: "18px" }}> Nest js </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="simple-icons:flask" width="60" height="60" />
        <p style={{ fontSize: "18px" }}> Flask API </p>
      </Col>
    </Row>
  );
}

export default BackEnd;
