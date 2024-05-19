import React from "react";
import { Col, Row } from "react-bootstrap";

import { Icon } from "@iconify/react";
function Database() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="simple-icons:mysql" width="80" height="80" />
        <p style={{ fontSize: "18px" }}> MySql </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="akar-icons:postgresql-fill" width="60" height="60" />
        <p style={{ fontSize: "18px" }}> Postgresql </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="devicon-plain:dynamodb" width="50" height="50" />
        <p style={{ fontSize: "18px" }}> DynamoDB </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="simple-icons:mongodb" width="60" height="60" />
        <p style={{ fontSize: "18px" }}> MongoDB </p>
      </Col>
    </Row>
  );
}

export default Database;
