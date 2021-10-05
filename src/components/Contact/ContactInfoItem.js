import React from "react";
import { MdPlace } from "react-icons/md";
import { Container } from "react-bootstrap";
import classes from "./ContactInfoItem.module.css";

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = "I need text ",
}) {
  return (
    <Container className={classes.contactInfoStyled}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.info}>
        <p>{text}</p>
      </div>
    </Container>
  );
}
