import React from "react";
import { NavBar } from "../../NavBar/NavBar";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.Header}>
      <NavBar />
    </header>
  );
};

export default Header;
