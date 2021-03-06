import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import myImg from "../../Assets/profileCircle.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import classes from "./MainPage.module.css";

function MainPageBottom() {
  const { t } = useTranslation("global");
  return (
    <Container fluid className={classes.homeBottomAboutSection} id="homeAbout">
      <Particle />
      <Container>
        <Row>
          <Col md={8} className={classes.homeAboutDescription}>
            <h1 style={{ fontSize: "2.6em" }}>
              {t("mainPage.LET-ME")}{" "}
              <span className="turquoise">{t("mainPage.INTRODUCE")} </span>{" "}
              {t("mainPage.MYSELF")}
            </h1>
            <p className={classes.homeAboutBody}>
              {t(
                "mainPage.I changed my professional career in 2017 and since then I have been passionate about programming"
              )}
              <br />
              <br />
              {t("mainPage.My main language is")}
              <i>
                <b className="turquoise"> Javascript </b>{" "}
                {t("mainPage.although my first ❝ Hello World ❞ was in Java")}
              </i>
              <br />
              <br />
              {t("mainPage.My field of Interest's are building new")}
              <i>
                <b className="turquoise">
                  {" "}
                  {t("mainPage.Web Pages and Apps")}{" "}
                </b>{" "}
                {t("mainPage.and also in areas related to")}{" "}
                <b className="turquoise">
                  {t("mainPage.Back-end development using the MERN stack")}
                </b>
              </i>
              <br />
              <br />
              {t(
                "mainPage.Whenever possible, I also apply my passion for developing products with"
              )}{" "}
              <b className="turquoise">Node.js</b>
              {t("mainPage.and")}
              <i>
                <b className="turquoise">
                  {" "}
                  {t("mainPage.Modern Javascript Library and Frameworks")}
                </b>
              </i>
              &nbsp;{t("mainPage.like")}
              <i>
                <b className="turquoise"> React.js{t("mainPage.and")} Redux</b>
              </i>
            </p>
          </Col>
          <Col md={4} className={classes.myAvtar}>
            <Tilt>
              <img src={myImg} className={classes.profileCircle} alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className={classes.homeAboutSocial}>
            <h1>{t("mainPage.FIND ME ON")}</h1>
            <p>
              {t("mainPage.Feel free to")}{" "}
              <span className="turquoise">{t("mainPage.connect")} </span>
              {t("mainPage.with me")}
            </p>
            <ul className={classes.homeAboutSocialLinks}>
              <li className={classes.socialIcons}>
                <a
                  href="https://github.com/CManuelHernandez"
                  target="_blank"
                  rel="noreferrer"
                  className={`${classes.iconColour} ${classes.homeSocialIcons}`}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className={classes.socialIcons}>
                <a
                  href="https://www.linkedin.com/in/carlosmanuelhernandezmontero/"
                  target="_blank"
                  rel="noreferrer"
                  className={`${classes.iconColour} ${classes.homeSocialIcons}`}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className={classes.socialIcons}>
                <a
                  href="https://www.instagram.com/cmanhm/"
                  target="_blank"
                  rel="noreferrer"
                  className={`${classes.iconColour} ${classes.homeSocialIcons}`}
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default MainPageBottom;
