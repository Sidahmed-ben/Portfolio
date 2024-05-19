import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about from "../../Assets/about.png";
import Tilt from "react-parallax-tilt";

function Presentation() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <Row>
              <Col md={6}>
                <h1
                  style={{
                    fontSize: "2.6em",
                    textAlign: "left",
                  }}
                >
                  Je me <span className="purple"> PRÉSENTE </span>
                </h1>
              </Col>
            </Row>
            <p className="home-about-body">
              Je m'appelle{" "}
              <i>
                <b className="purple">Sidahmed </b>
              </i>
              , j'ai 24 ans et je suis{" "}
              <i>
                <b className="purple">Développeur Web FullStack </b>
              </i>{" "}
              passionné par la création des solutions web. <br /> <br />
              Je suis à la recherche d'un{" "}
              <i>
                <b className="purple">CDI</b>
              </i>{" "}
              à partir du mois d'{""}
              <i>
                <b className="purple">octobre 2024.</b>
              </i>
              <br /> <br />
              Fort de{" "}
              <i>
                <b className="purple">3 ans </b>
              </i>{" "}
              d'expérience en tant qu'alternant et détenteur d'un{" "}
              <i>
                <b className="purple">Master</b>
              </i>{" "}
              en développement web à l'université de Paris 8, j'ai acquis une expertise tant dans le
              domaine du Front-end que du Back-end. Je me spécialise notamment
              dans les nouvelles technologies telles que{" "}
              <i>
                <b className="purple">React, Angular, Cloud AWS et NodeJs.</b>
              </i>
              <br />
              <br />
              Je serai ravi de collaborer avec vous et je vous encourage à
              explorer davantage mon site pour obtenir plus d'informations sur
              mon expertise qui pourraient vous intéresser !
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={about} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Presentation;
