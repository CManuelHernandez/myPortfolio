import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

const Header = () => {
  const { i18n } = useTranslation("global");
  return (
    <header>
      <p>Cabecera de la página</p>
      <button onClick={() => i18n.changeLanguage("es")}>ES</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
    </header>
  );
};

export default Header;
