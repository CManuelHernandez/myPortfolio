import React from "react";
import MobileNavigation from "./MobileNavigation";
import classes from "./NavBar.module.css";
import Navigation from "./Navigation";

export const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};
