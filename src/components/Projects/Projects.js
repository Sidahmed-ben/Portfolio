import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import wattImage from "../../Assets/Projects/wattsport.png";
import pixt from "../../Assets/Projects/pixt.png";
import fire from "../../Assets/Projects/fire.png";
import film from "../../Assets/Projects/film.png";
import c42 from "../../Assets/Projects/42c.png";
import auto from "../../Assets/Projects/auto.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Contributions </strong> Récentes
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auto}
              isBlog={false}
              isRea={false}
              title="MON SPÉCIALISTE AUTO"
              description="Plateforme de mise en relation entre les établissements automobiles (concessions, ateliers...) et les techniciens."
              techno={[
                "TypeScript",
                "React",
                "Material UI",
                "AgGrid",
                "Node.js (Express)",
                "MongoDB",
                "AWS S3",
                "AWS Beanstalk",
                "GitHub Actions",
                "Playwright",
              ]}
              feat={[
                "Développement et maintenance du Frontend et du Backend des applications destinées aux utilisateurs et aux administrateurs",
                "Gestion server-side de données massives pour un affichage optimisé sur AgGrid",
                "Automatisation des tests End-to-End et d’intégration avec Playwright",
                "Déploiement sur AWS Beanstalk avec intégration de GitHub Actions pour le CI/CD",
                "Gestion de projet en méthodologie Agile (Scrum) avec sprints et revues régulières",
              ]}
              demoLink="https://www.monspecialisteauto.com/"
            />
          </Col>
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
                "Implémentation d’une architecture microservices",
                "Intégration du service Amazon Opensearch pour la recherche d'images",
                "Intégration de Amazon SQS Queue consommée par une Lambda pour automatiser la compression des fichiers lors de leur upload",
                "Intégration du service Amazon Rekognition pour la détection automatique des labels des images",
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
                "Optimisation des performances du site pour un meilleur temps de chargement",
                "Mise en place d'une architecture modulaire avec NestJS pour une meilleure maintenabilité",
                "Création de composants réutilisables avec Material UI",
                "Gestion des données dynamiques avec MongoDB pour un contenu facilement modifiable",
                ]}
              // ghLink="https://github.com/Sidahmed-ben/WattSport"
              demoLink="https://www.42c.fr/"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Mes <strong className="purple">Réalisations </strong> Récentes
        </h1>
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
