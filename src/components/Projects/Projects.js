import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Layout from "../layout/Layout";
import { useTranslation } from "react-i18next";
import Scroll from "../Scroll/Scroll";
import classes from "./Projects.module.css";

import blackJ from "../../Assets/Projects/blackjack.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import jump from "../../Assets/Projects/jump.png";
import teach from "../../Assets/Projects/teach.png";
import films from "../../Assets/Projects/films.png";
import name from "../../Assets/Projects/name.png";

function Projects() {
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
                My &nbsp;
                <strong className="turquoise">Recent Works </strong>
              </h1>
              <p className={classes.projectSubtitle} style={{ color: "white" }}>
                Here are a few projects I've worked on.
              </p>
            </div>
          </Col>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className={classes.projectCard}>
              <ProjectCard
                imgPath={teach}
                fullStack={true}
                title="Teach it up!"
                description={t(
                  "projects.Final Project of the Bootcamp of KeepCoding full web stack. Teach it up It is a platform that serves to publish online courses, for what type of users is it intended Teach it up is designed for both instructors who want to host courses as students or users who want these 2 possibilities."
                )}
                link="https://github.com/jcmpes/reactcourse"
                linkBack="https://github.com/jcmpes/nodecourse"
                repo="http://teachitup.net/"
              />
            </Col>

            <Col md={4} className={classes.projectCard}>
              <ProjectCard
                imgPath={portfolio}
                title={t("projects.My Portfolio")}
                description={t(
                  "projects.My personal Portfolio which is developed with React. In it you will find all the information about my experience and training in the IT sector, such as my repositories of my projects and social networks to make myself known. This project will grow with me as my experience grows"
                )}
                link="https://cmanuelhernandez.github.io/myPortfolio"
                repo="https://github.com/CManuelHernandez/myPortfolio"
              />
            </Col>

            <Col md={4} className={classes.projectCard}>
              <ProjectCard
                imgPath={films}
                title="MovieApp"
                description={t(
                  "projects.Application to view a wide catalog of movie catalog thanks to the omdbapi Api. Made with React and stylized by Boostrap in which you can search for movies and create a list of favorites."
                )}
                link="https://cmanuelhernandez.github.io/MovieApp/"
                repo="https://github.com/CManuelHernandez/MovieApp"
              />
            </Col>

            <Col md={4} className={classes.projectCard}>
              <ProjectCard
                imgPath={blackJ}
                title="Black Jack"
                description={t(
                  "projects.Application that allows you to play games of Bclak Jack against a bank. This application is made using JavaScript, HTML and CSS"
                )}
                link="https://cmanuelhernandez.github.io/BlackJack/"
                repo="https://github.com/CManuelHernandez/BlackJack"
              />
            </Col>

            <Col md={4} className={classes.projectCard}>
              <ProjectCard
                imgPath={jump}
                title="Jumping Guy"
                description={t(
                  "projects.Jumping Guy game is a game of jumping the enemies that appear and as they are overcome, the speed at which they appear increases. Done with C and Unity it was my first contact with the creation of games"
                )}
                link="https://cmanuelhernandez.github.io/JumpingGuy/"
                repo="https://github.com/CManuelHernandez/JumpingGuy"
              />
            </Col>

            <Col md={4} className={classes.projectCard}>
              <ProjectCard
                imgPath={name}
                title={t("projects.Name Generator")}
                description={t(
                  "projects.Application to generate names randomly being able to choose and the gender and origin of the names obtained. From my first contacts to using Apis with JavaScript"
                )}
                link="https://github.com/CManuelHernandez/GeneradorNombres"
                repo="https://cmanuelhernandez.github.io/GeneradorNombres/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </Layout>
  );
}

export default Projects;
