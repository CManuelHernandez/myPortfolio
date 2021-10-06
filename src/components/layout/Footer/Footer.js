import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgSoftwareDownload } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import pdf from "../../../Assets/CManuelHM-CV.pdf";
import classes from "./Footer.module.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const { t } = useTranslation("global");
  return (
    <Container fluid className={classes.footer}>
      <Row>
        <Col md="4" className={classes.footerCopywright}>
          <h3>
            {t("footer.Designed and Developed by")} Carlos Manuel Hernández
            Montero
          </h3>
          <h3>Copyright © {year} CManuelHM</h3>
        </Col>
        <Col md="4" className={classes.footerCopywright}>
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className={`${classes.iconColour} ${classes.footerSocialIcons}`}
          >
            <CgSoftwareDownload
              style={{ fontSize: "1.6em", marginRight: "0.5rem" }}
            />
            {t("footer.Download My CV")}
          </a>
        </Col>
        <Col md="4" className={classes.footerBody}>
          <ul className={classes.footerIcons}>
            <li className={classes.socialIcons}>
              <a
                href="https://github.com/CManuelHernandez"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className={classes.socialIcons}>
              <a
                href="https://www.linkedin.com/in/carlos-manuel-hern%C3%A1ndez-montero/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className={classes.socialIcons}>
              <a
                href="https://www.instagram.com/cmanhm/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
