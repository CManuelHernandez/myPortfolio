import React from "react";
import Layout from "../layout/Layout";
import MainPageTop from "./MainPageTop";
import { useTranslation } from "react-i18next";
import MainPageBottom from "./MainPageBottom";

export const MainPage = () => {
  const { t } = useTranslation("global");

  return (
    <Layout>
      <MainPageTop />
      <MainPageBottom />
    </Layout>
  );
};

export default MainPage;
