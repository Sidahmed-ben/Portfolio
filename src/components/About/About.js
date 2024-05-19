import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

import Langages from "./Langages";
import BackEnd from "./BackEnd";
import Database from "./Database";
import Devops from "./Devops";
import GestProj from "./GestProj";
import FrontEnd from "./FrontEnd";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Langages de programmation */}
        <h1 className="project-heading">
          <strong className="purple">Langages </strong> de programmation
        </h1>
        <Langages />
        <h1 className="project-heading">
          <strong className="purple">Back</strong>End
        </h1>
        <BackEnd />
        <h1 className="project-heading">
          <strong className="purple">Base de </strong>données
        </h1>
        <Database />
        <h1 className="project-heading">
          <strong className="purple">Front</strong>End
        </h1>
        <FrontEnd />
        <h1 className="project-heading">
          <strong className="purple">Dev</strong>Ops
        </h1>
        <Devops />
        <h1 className="project-heading">
          <strong className="purple">Gestion </strong> de projet
        </h1>
        <GestProj />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
