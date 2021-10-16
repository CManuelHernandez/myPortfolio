import React from "react";
import Layout from "../layout/Layout";
import Scroll from "../Scroll/Scroll";
import MainPageTop from "./MainPageTop";
import MainPageBottom from "./MainPageBottom";

export const MainPage = () => {
  return (
    <Layout>
      <Scroll showBellow={250} />
      <MainPageTop />
      <MainPageBottom />
    </Layout>
  );
};

export default MainPage;
