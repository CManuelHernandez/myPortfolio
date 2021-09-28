import React from "react";
import NavLinks from "./NavLinks";
import classes from "./NavBar.module.css";
import { CgMenuRound, CgCloseO } from "react-icons/cg";

const MobileNavigation = () => {
  const [open, setOpen] = React.useState(false);

  const hamburgerIcon = (
    <CgMenuRound
      className={classes.Hamburger}
      onClick={() => setOpen(!open)}
      size="40px"
      color="white"
    />
  );

  const closeIcon = (
    <CgCloseO
      className={classes.Hamburger}
      onClick={() => setOpen(!open)}
      size="40px"
      color="white"
    />
  );
  const closeMobileMenu = () => setOpen(false);
  return (
    <nav className={classes.MobileNavigation}>
      {open ? hamburgerIcon : closeIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
