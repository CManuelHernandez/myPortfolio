import React from "react";
import Card from "react-bootstrap/Card";
import { BsLink } from "react-icons/bs";
import classes from "./Projects.module.css";

function BlogsCards(props) {
  return (
    <a
      className={classes.blogLink}
      href={props.link}
      target="_blank"
      rel="noreferrer"
      style={{ fontSize: "1.2em" }}
    >
      <Card className={classes.blogCardView}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          className={classes.blogImg}
        />
        <Card.Footer>
          <BsLink />
          &nbsp;
          {props.title}
          <p style={{ marginBlockEnd: "0em" }}>{props.site}</p>
        </Card.Footer>
      </Card>
    </a>
  );
}

export default BlogsCards;
