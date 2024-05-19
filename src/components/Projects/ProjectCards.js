import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "space-between",
        }}
      >
        <Card.Title>{props.title}</Card.Title>
        <br></br>

        <Card.Text style={{ textAlign: "justify", marginBottom: "50px" }}>
          {props.description}
          <br></br>
          <br></br>
          <strong className="purple">Technos : </strong>
          {props.techno &&
            props.techno.map((tech, index) => (
              <span key={index}>{tech}, </span>
            ))}
          <br></br>
          <br></br>
          <strong className="purple">
            {props.isRea ? "Réalisations : " : "Contributions : "}
          </strong>
          {props.feat &&
            props.feat.map((tech, index) => <span key={index}>{tech}. </span>)}
        </Card.Text>
        <br></br>

        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{
              position: "absolute",
              bottom: 20 /* Adjust the value to control the distance from the bottom */,
              width: "80%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "Lien GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{
              position: "absolute",
              bottom: 20 /* Adjust the value to control the distance from the bottom */,
              width: "80%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
