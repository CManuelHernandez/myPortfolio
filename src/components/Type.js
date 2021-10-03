import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function Type() {
  const { t } = useTranslation("global");
  return (
    <Typewriter
      options={{
        strings: [
          t("Developer"),
          t("Junior Front-end"),
          t("MERN Stack Developer"),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
