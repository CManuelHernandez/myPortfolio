import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { GrLinkedinOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import Layout from "../layout/Layout";
import ContactInfoItem from "./ContactInfoItem";

import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";

export const Contact = () => {
  return (
    <Layout>
      <Container fluid className={classes.allContact}>
        <Container fluid className={classes.contactSection} id="contact">
          <Container className={classes.contactContent}>
            <Col md={10} className={classes.contactInfoTitle}>
              <h1>Contact</h1>
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

                <ContactInfoItem
                  icon={<FiGithub />}
                  text="https://github.com/CManuelHernandez?tab=repositories"
                />
                <ContactInfoItem
                  icon={<GrLinkedinOption />}
                  text="linkedin.com/in/carlosmanuelhernandezmontero"
                />
                <ContactInfoItem text="Madrid, Rivas-Vaciamadrid - España" />
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
