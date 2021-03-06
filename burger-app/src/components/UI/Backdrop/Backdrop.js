import React from "react";
import classes from "./Backdrop.module.css";

function BackDrop(props) {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.clickBackdrop}></div>
  ) : null;
}

export default BackDrop;
