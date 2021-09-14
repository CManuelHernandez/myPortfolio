import React from "react";
import logo from "../../logo.svg";
import Layout from "../layout/Layout";

const MainPage = () => {
  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Layout>
  );
};

export default MainPage;
