import React from "react";
import logo from "../../logo.svg";
import Layout from "../layout/Layout";
import { useTranslation } from "react-i18next";

export const MainPage = () => {
  const { t } = useTranslation("global");

  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <h1>{t("hello-world")}</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Layout>
  );
};

export default MainPage;
