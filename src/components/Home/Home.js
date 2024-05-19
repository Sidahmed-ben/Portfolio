import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import moi from "../../Assets/moi.jpg";
import Particle from "../Particle";
import Presentation from "./Presentation";
import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Bonjour !{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                Je m'appelle
                <strong className="main-name"> BENAISSA Sidahmed</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col style={{ maxWidth: 300, margin: "auto", marginBottom: 100 }}>
              <img
                src={moi}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: "300px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Presentation />
      <About></About>
      <Projects></Projects>
      <Container>
        <Row>
          <Col
            style={{ marginTop: "50px" }}
            md={12}
            className="home-about-social"
          >
            <h1>Réseaux Sociaux</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sidahmed-ben"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sidahmed-benaissa-043a021a6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sid_ahmed__ben/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
