import React from "react";
import { Container } from "react-bootstrap";
import classes from "./About.module.css";

export default function AboutInfoItem({
  title = "Title",
  items = ["HTML", "CSS"],
}) {
  return (
    <Container className={classes.aboutInfoStyled}>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.items}>
        {items.map((item, index) => (
          <div className={classes.item} key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
