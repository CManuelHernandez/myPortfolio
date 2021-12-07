import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Layout from "../layout/Layout";
import { useTranslation } from "react-i18next";
import Scroll from "../Scroll/Scroll";
import classes from "./Projects.module.css";

import projectData from "../../Data/ProjectsData";
import projectsData from "../../Data/ProjectsData";

function Projects() {
  console.log(projectData);
  const { t } = useTranslation("global");
  return (
    <Layout>
      <Scroll showBellow={250} />
      <Container fluid className={classes.projectSection}>
        <Particle />
        <Container className={classes.projectWrapper}>
          <Col md={12} className={classes.projectsInfoTitle}>
            <div>
              <h1 className={classes.projectHeading}>
                {t("projects.My")} &nbsp;
                <strong className="turquoise">
                  {t("projects.Recent Works")}
                </strong>
              </h1>
              <p className={classes.projectSubtitle} style={{ color: "white" }}>
                {t("projects.Here are a few projects I've worked on.")}
              </p>
            </div>
          </Col>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projectsData.map((data) => (
              <Col md={4} className={classes.projectCard}>
                <ProjectCard
                  md={4}
                  className={classes.projectCard}
                  key={data.id}
                  imgPath={data.imgPath}
                  fullStack={data.fullStack}
                  title={t(data.title)}
                  description={t(data.description)}
                  link={data.link}
                  linkBack={data.linkBack}
                  repo={data.repo}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </Layout>
  );
}

export default Projects;
