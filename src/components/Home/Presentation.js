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
              , j'ai 25 ans et je suis{" "}
              <i>
                <b className="purple">Développeur Web FullStack </b>
              </i>{" "}
              passionné par la création des solutions web.
              <br /> <br />
              Au cours de mes <b className="purple">4 ans </b> en tant que
              développeur Fullstack, j’ai travaillé sur des projets variés,
              contribuant autant à l’optimisation des interfaces utilisateurs
              qu’à la conception des APIs, des bases de données et des solutions
              de déploiement, le tout dans un cadre{" "}
              <i>
                <b className="purple">Agile.</b>
              </i>
              <br />
              Je me spécialise notamment dans les nouvelles technologies telles
              que{" "}
              <i>
                <b className="purple">Cloud AWS, NodeJs, React et Angular. </b>
              </i>
              <br /> <br />
              Je suis à la recherche d'un{" "}
              <i>
                <b className="purple">CDI</b>
              </i>{" "}
              à partir du mois de{""}
              <i>
                <b className="purple"> Novembre,</b>
              </i>{" "}
              et je serai ravi de collaborer avec vous et je vous encourage à
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
