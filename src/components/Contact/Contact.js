import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { GrLinkedinOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import Layout from "../layout/Layout";
import ContactInfoItem from "./ContactInfoItem";
import { useTranslation } from "react-i18next";

import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";

const googleMaps =
  "https://www.google.es/maps/place/Rivas-Vaciamadrid,+Madrid/@40.3493693,-3.6740024,11z/data=!4m5!3m4!1s0xd423c0de6c9b919:0x9014cc03cd201292!8m2!3d40.3519065!4d-3.5357334?hl=es";

export const Contact = () => {
  const { t } = useTranslation("global");
  return (
    <Layout>
      <Container fluid className={classes.allContact}>
        <Container fluid className={classes.contactSection} id="contact">
          <Container className={classes.contactContent}>
            <Col md={10} className={classes.contactInfoTitle}>
              <div>
                <h3>{t("contact.get in touch")}</h3>
                <h1>{t("contact.Contact")}</h1>
              </div>
            </Col>

            <Row>
              <Col md={6} className={classes.contactInfo}>
                <ContactInfoItem
                  icon={<MdLocalPhone />}
                  text="+34 666 775 684"
                />
                <ContactInfoItem
                  icon={<MdEmail />}
                  text="cmnauelhm87@gmail.com"
                />
                <a
                  href="https://github.com/CManuelHernandez"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ContactInfoItem
                    icon={<FiGithub />}
                    text="github.com/CManuelHernandez"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/carlosmanuelhernandezmontero/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ContactInfoItem
                    icon={<GrLinkedinOption />}
                    text="linkedin.com/in/carlosmanuelhernandezmontero"
                  />
                </a>
                <a href={googleMaps} target="_blank" rel="noreferrer">
                  <ContactInfoItem
                    text={t("contact.Madrid, Rivas-Vaciamadrid - Spain")}
                  />
                </a>
              </Col>
              <Col md={6} className={classes.contactForm}>
                <ContactForm />
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </Layout>
  );
};
