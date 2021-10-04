import React from "react";
import PropTypes from "prop-types";

import { Header, Footer } from "../layout";
import classes from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={classes.Layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
