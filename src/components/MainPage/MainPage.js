import React from "react";
import Layout from "../layout/Layout";
import MainPageTop from "./MainPageTop";
import MainPageBottom from "./MainPageBottom";

export const MainPage = () => {
  return (
    <Layout>
      <MainPageTop />
      <MainPageBottom />
    </Layout>
  );
};

export default MainPage;
