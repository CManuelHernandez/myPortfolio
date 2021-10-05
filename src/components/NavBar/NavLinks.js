import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import spainsh from "./../img/es.png";
import english from "./../img/en.jpg";
import classes from "./NavBar.module.css";

const NavLinks = ({ isMobile, closeMobileMenu }) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  const { t, i18n } = useTranslation("global");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <Link to="/">{t("nav.Home")}</Link>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <Link to="/about">{t("nav.About Me")}</Link>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <Link to="/">{t("nav.Contact")}</Link>
      </motion.li>

      {/* <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <Link to="/">Git</Link>
      </motion.li> */}
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <img
          className={classes.es}
          onClick={() => i18n.changeLanguage("es")}
          src={spainsh}
          alt="spainsh"
          style={{ width: 40 }}
        ></img>
        <img
          className={classes.en}
          onClick={() => i18n.changeLanguage("en")}
          src={english}
          alt="english"
          style={{ width: 50, marginLeft: 10 }}
        ></img>
        {/* <button onClick={() => i18n.changeLanguage("es")}>ES</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button> */}
      </motion.li>
    </ul>
  );
};

export default NavLinks;
