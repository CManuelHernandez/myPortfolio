import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutInfoItem from "./AboutInfoItem";
import { CgEnter, CgSoftwareDownload } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import pdf from "../../Assets/CManuelHM-CV.pdf";
import myImg from "../../Assets/yoBW.jpg";
import classes from "./About.module.css";

function About() {
  const { t } = useTranslation("global");
  return (
    <>
      <Container fluid className={classes.allAbout}>
        <Container fluid className={classes.aboutSection} id="about">
          <Container className={classes.aboutContent}>
            <Row>
              <Col md={7} className={classes.aboutHeader}>
                <p className={classes.aboutSubHeading}>
                  {t("about.Hi, I am")}{" "}
                  <span className="purple">
                    Carlos Manuel Hernández Montero
                  </span>
                </p>
                <h2 className={classes.aboutHeading}>
                  {t("about.Jr.Full Stack")}{" "}
                  <span className="purple">{t("about.Web Developer")}</span>
                  {t("about.Jr.Full Stack ES")}
                </h2>
                <div className={classes.aboutInfo}>
                  <p>
                    {t("about.Graduated in")}{" "}
                    <span className="purple">
                      {t("about.Web Application Development")}
                    </span>{" "}
                    {t(
                      "about.from the Technological Institute of Telefonica, programming enthusiast and of new technologies. I consider myself a person cooperative, curious and eager to learn and improve."
                    )}
                  </p>
                  <p>
                    {t(
                      "about.from that my interest in training continuously. I am looking for a company that offers me the opportunity to continue evolving in the world of web development and I am committed to get involved and to do what it takes for the achievement of objectives."
                    )}
                  </p>
                  <p>
                    {t(
                      "about.due to the situation caused by the pandemic I have reinforce my knowledge in different technologies. Deepening and broadening my knowledge using the BOOTCAMP of KeepCoding® of"
                    )}{" "}
                    <span className="purple">Full Stack Web Developer</span>{" "}
                    {t("about.with the MERN stack")}
                  </p>
                </div>
                <Col md="4" className={classes.aboutCV}>
                  <a
                    href={pdf}
                    target="_blank"
                    rel="noreferrer"
                    className={`${classes.iconColour} ${classes.aboutSocialIcons}`}
                  >
                    <CgSoftwareDownload
                      style={{ fontSize: "1.6em", marginRight: "0.5rem" }}
                    />
                    {t("footer.Download My CV")}
                  </a>
                </Col>
              </Col>
              <Col md={5} style={{ paddingBottom: 20 }}>
                <img src={myImg} alt="about pic" className={classes.imgAbout} />
              </Col>
            </Row>
          </Container>
        </Container>

        <Container>
          <Col md={10} className={classes.AboutDescription}>
            <h1 className={classes.aboutInfoHeading}>{t("about.Education")}</h1>
            <AboutInfoItem
              title={t("about.Web Application Development")}
              items={["Instituto Tecnológico Telefónica"]}
            />
            <AboutInfoItem
              title="Full Stack Web BOOTCAMP"
              items={["KeepCoding®"]}
            />
          </Col>
          <Col md={8} className={classes.AboutDescription}>
            <h1 className={classes.aboutInfoHeading}>{t("about.My")} Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={["HTML", "CSS", "JavaScript", "REACT"]}
            />
            <AboutInfoItem
              title="BackEnd"
              items={["Node", "Express", "Java"]}
            />
          </Col>
          <Col md={8} className={classes.AboutDescription}>
            <h1 className={classes.aboutInfoHeading}>
              {t("about.Experiences")}
            </h1>
            <AboutInfoItem
              title="10/2019-04/2020"
              items={["BlazedPath Developer"]}
            />
            <AboutInfoItem title="04/2019-07/2019" items={["Web Developer"]} />
          </Col>
          <Col md={8} className={classes.AboutDescription}>
            <h1 className={classes.aboutInfoHeading}>
              {t("about.Others Experiences")}
            </h1>
            <AboutInfoItem
              title="09/2009-12/2018"
              items={["Optical and acoustic health"]}
            />
          </Col>
        </Container>
      </Container>
    </>
  );
}

export default About;