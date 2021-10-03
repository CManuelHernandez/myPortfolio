import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import homeLogo from "../../Assets/devloop.svg";
import Particle from "../Particle";
import Type from "../Type";

import classes from "./MainPage.module.css";

export const MainPage = () => {
  const { t } = useTranslation("global");

  return (
    <Container fluid className={classes.homeSection} id="home">
      <Particle />
      <Container className={classes.homeContent}>
        <Row>
          <Col md={7} className={classes.homeHeader}>
            <h1 style={{ paddingBottom: 15 }} className={classes.heading}>
              {t("mainPage.hello-there!")}{" "}
              <span className={classes.wave} role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className={classes.headingName}>
              {t("mainPage.I'M")}
              <strong className={classes.mainName}>
                {" "}
                CARLOS MANUEL HERNÁNDEZ MONTERO
              </strong>
            </h1>

            <div
              style={{
                padding: 50,
                textAlign: "left",
                fontSize: "2.3em",
                color: "#2a8f96",
              }}
            >
              <Type />
            </div>
          </Col>
          <Col md={5} style={{ paddingBottom: 20 }}>
            <img src={homeLogo} alt="home pic" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MainPage;
