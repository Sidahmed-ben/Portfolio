import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";

function Cloud() {
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
    </Row>
  );
}

export default Cloud;
