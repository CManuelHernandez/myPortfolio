import React from "react";
import Layout from "../layout/Layout";
import { useTranslation } from "react-i18next";
import code from "./../img/code.png";
import world from "./../img/world.png";

import classes from "./MainPage.module.css";

export const MainPage = () => {
  const { t } = useTranslation("global");

  return (
    <Layout>
      <div className={classes.MainPage}>
        <div className={classes.Container}>
          <h1 className={classes.Hello}>{t("hello-world")}</h1>
          <h1>Wellcome on my website</h1>
          <img className={classes.Code} src={code} alt="code"></img>
          <img className={classes.BinaryWorld} src={world} alt="me"></img>
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
