import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutInfoItem from "./AboutInfoItem";
import Layout from "../layout/Layout";
import { CgSoftwareDownload } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import pdf from "../../Assets/CManuelHM-CV.pdf";
import myImg from "../../Assets/man.png";
import classes from "./About.module.css";
import Scroll from "../Scroll/Scroll";

function About() {
  const { t } = useTranslation("global");
  return (
    <Layout>
      <Scroll showBellow={250} />
      <Container fluid className={classes.allAbout}>
        <Container fluid className={classes.aboutSection} id="about">
          <Container className={classes.aboutContent}>
            <Row>
              <Col md={7} className={classes.aboutHeader}>
                <p className={classes.aboutSubHeading}>
                  {t("about.Hi, I am")}{" "}
                  <span className="turquoise">
                    Carlos Manuel Hernández Montero
                  </span>
                </p>
                <h2 className={classes.aboutHeading}>
                  {t("about.Jr.Full Stack")}{" "}
                  <span className="turquoise">{t("about.Web Developer")}</span>
                  {t("about.Jr.Full Stack ES")}
                </h2>
                <div className={classes.aboutInfo}>
                  <p>
                    {t("about.Graduated in")}{" "}
                    <span className="turquoise">
                      {t("about.Web Application Development")}
                    </span>{" "}
                    {t(
                      "about.from the Technological Institute of Telefonica, passionated about programming and new technologies. I consider myself a cooperative and curious person and eager to learn and improve."
                    )}
                  </p>
                  <p>
                    {t(
                      "about.That's where my interest in training continuously. I am looking for a company that offers me the opportunity to continue evolving in the world of web development and I am committed to get involved and to do what it takes for the achievement of objectives."
                    )}
                  </p>
                  <p>
                    {t(
                      "about.due to the situation caused by the pandemic I have reinforce my knowledge in different technologies. Deepening and broadening my knowledge using the BOOTCAMP of KeepCoding® of"
                    )}{" "}
                    <span className="turquoise">Full Stack Web Developer</span>{" "}
                    {t("about.with the MERN stack")}
                  </p>
                </div>
                <Col md={4} className={classes.aboutCV}>
                  <a
                    href={pdf}
                    target="_blank"
                    rel="noreferrer"
                    className={`${classes.iconColour} ${classes.aboutSocialIcons}`}
                  >
                    <CgSoftwareDownload
                      style={{
                        fontSize: "1.6em",
                        marginRight: "0.5rem",
                        marginBottom: "0.5rem",
                      }}
                    />
                    {t("footer.Download My CV")}
                  </a>
                </Col>
              </Col>
              <Col className={classes.imgWrapper} md={5}>
                <img src={myImg} alt="about pic" className={classes.imgAbout} />
              </Col>
            </Row>
          </Container>
        </Container>

        <Container>
          <Col md={12} className={classes.AboutDescription}>
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
              className="itemBig"
              title="FrontEnd"
              items={[
                "HTML",
                "CSS",
                "JavaScript",
                "REACT",
                "TypeScript",
                "Angular",
              ]}
            />
            <AboutInfoItem
              title="BackEnd"
              items={["Node", "Express", "Java", "Spring"]}
            />
          </Col>
          <Col md={8} className={classes.AboutDescription}>
            <h1 className={classes.aboutInfoHeading}>
              {t("about.Experiences")}
            </h1>
            <AboutInfoItem
              title={[t("about.01/2022-Currently")]}
              items={[t("about.Full stack Developer Asociated Consultant")]}
            />
            <AboutInfoItem
              title="10/2019-04/2020"
              items={[t("about.BlazedPath Developer")]}
            />
            <AboutInfoItem
              title="04/2019-07/2019"
              items={[t("about.Web Developer")]}
            />
          </Col>
          <Col md={8} className={classes.AboutDescription}>
            <h1 className={classes.aboutInfoHeading}>
              {t("about.Others Experiences")}
            </h1>
            <AboutInfoItem
              title="09/2009-12/2018"
              items={[t("about.Optical and Acoustic health")]}
            />
          </Col>
        </Container>
      </Container>
    </Layout>
  );
}

export default About;
