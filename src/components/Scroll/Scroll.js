import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { IconButton } from "@material-ui/core";
import classes from "./Scroll.module.css";

const Scroll = ({ showBellow }) => {
  const [show, setShow] = React.useState(showBellow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBellow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    if (showBellow) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });

  return (
    <div>
      {show && (
        <IconButton onClick={handleClick} className={classes.scrollStyle}>
          <ExpandLessIcon />
        </IconButton>
      )}
    </div>
  );
};

export default Scroll;
