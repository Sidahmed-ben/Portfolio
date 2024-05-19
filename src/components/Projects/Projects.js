import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import wattImage from "../../Assets/Projects/wattsport.png";
import pixt from "../../Assets/Projects/pixt.png";
import fire from "../../Assets/Projects/fire.png";
import film from "../../Assets/Projects/film.png";
import c42 from "../../Assets/Projects/42c.png";
import switchTo from "../../Assets/Projects/switch.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Contributions </strong> Récentes
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pixt}
              isBlog={false}
              isRea={false}
              title="Pix.T"
              description="Une plateforme alimenté par la blockchain qui vise à certifier, vendre et partager des images."
              techno={[
                "TypeScript",
                "Python",
                "React",
                "Material UI",
                "Aws Lambda",
                "Aws S3",
                "Aws DynamoDB",
                "Opensearch",
                "Api Gateway",
                "Aws Rekognition",
              ]}
              feat={[
                "Intégration du service Amazon Opensearch pour la recherche d'images",
                "Intégration du serivce Amazon Rekognition pour la détection automatique des labels des images",
                "Implémentation d'un système de like",
                "Implémentation de la fonctionnalité compression d'image",
              ]}
              // ghLink="https://github.com/Sidahmed-ben/WattSport"
              demoLink="https://pixt.42cloud.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c42}
              isBlog={false}
              isRea={false}
              title="42C"
              description="C'est le site web officiel de l'entreprise 42 Consulting."
              techno={[
                "TypeScript",
                "React",
                "Material UI",
                "NestJS",
                "MongoDB",
              ]}
              feat={[
                "Intégration de la page 'On parle de nous !' afin de présenter les actualités de l'entreprise",
              ]}
              // ghLink="https://github.com/Sidahmed-ben/WattSport"
              demoLink="https://www.42c.fr/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={switchTo}
              isBlog={false}
              isRea={false}
              title="SwitchToTwitch"
              description="C'est un site web de régie vidéo permettant de gérer plusieurs flux vidéos entrants, d'alterner entre eux et d'insérer des fichiers vidéos et des images en direct."
              techno={[
                "Typescript",
                "Python",
                "React",
                "Material UI",
                "Aws Lambda",
                "Aws MediaLive",
                "Aws DynamoDB",
              ]}
              feat={[
                "Implémentation de la fonctionnalité Upload/Delete des vidéos dans des buckets S3 en utilisant le 'Presigned Url'",
                "Intégration du service Aws MediaLIve pour la diffusion en direct des flux vidéos",
              ]}
              // ghLink="https://github.com/Sidahmed-ben/WattSport"
              demoLink="#"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Mes <strong className="purple">Réalisations </strong> Récentes
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wattImage}
              isBlog={false}
              isRea={true}
              title="WattSport"
              description="Site web commercial conçu pour proposer des cours de sport en ligne."
              techno={[
                "JavaScript",
                "VueJs",
                "Bootstrap",
                "NodeJs",
                "Axios",
                "PostgreSQL",
                "Serveur JitsiMeet",
              ]}
              feat={[
                "Le suivi des séances de sport en direct en utilisant le serveur JitsiMeet",
                "La gestion des utilisateurs (création de compte, gestion des autorisations, authentification, etc...)",
                "La gestion des réservations des séances",
              ]}
              ghLink="https://github.com/Sidahmed-ben/WattSport"
              // demoLink="https://wattsport.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={film}
              isBlog={false}
              isRea={true}
              title="MovieRecommendation"
              description="Une plateforme alimentée par un modèle de machine learning qui permet de recommander des films en se basant sur les préférences des utilisateurs."
              techno={[
                "JavaScript",
                "React",
                "Material UI",
                "Python",
                "Flask",
                "Docker",
                "Firebase",
                "Machine learning (Knn)",
                "MySql",
              ]}
              feat={[
                "Intégration du modéle Knn pour la recommandation des films",
                "La céation de compte et l'authentification en utilisant 'Firebase Authentification'",
                "Dockerisation du projet",
                "Implémentation de l'interface utilisateur avec 'Material UI'",
              ]}
              ghLink="https://github.com/Sidahmed-ben/recommendation-des-films"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fire}
              isBlog={false}
              isRea={true}
              title="FireDetection"
              description="Site web alimenté par une IA qui permet de détecter du feu dans des flux vidéos."
              techno={[
                "Javascript",
                "React",
                "Material UI",
                "Python",
                "Flask",
                "Flask-Mail",
                "Jupyter",
                "PostgreSQL",
                "Machine Learning",
              ]}
              feat={[
                "Implémenation d'un modéle de réseau de neuronnes pour la détection du feu",
                "Entrainement du modéle avec des images de feu et des images sans feu",
                "Déploiement du modéle sur un serveur Flask",
                "Notification par mail en temps réel en cas de détection de feu avec Flask-Mail",
              ]}
              ghLink="https://github.com/Sidahmed-ben/new-fire-detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
