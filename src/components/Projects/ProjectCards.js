import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import classes from "./Projects.module.css";
import { useTranslation } from "react-i18next";

function ProjectCards(props) {
  const { t } = useTranslation("global");
  return (
    <Card className={classes.projectCardView}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button
          className={classes.btnPrimary}
          href={props.link}
          target="_blank"
        >
          {t("projects.View Project")}
        </Button>
        {props.fullStack ? (
          <div>
            <Button
              className={classes.btnSecondary}
              href={props.repo}
              target="_blank"
            >
              {t("projects.View FrontEnd Repository")}
            </Button>
            <Button
              className={classes.btnSecondary}
              href={props.repo}
              target="_blank"
            >
              {t("projects.View BackEnd Repository")}
            </Button>
          </div>
        ) : (
          <Button
            className={classes.btnSecondary}
            href={props.repo}
            target="_blank"
          >
            {t("projects.View Repository")}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
