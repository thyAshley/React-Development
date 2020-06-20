import React from "react";
import classes from "./Button.module.css";
// import { withRouter } from "react-router-dom";

const Button = (props) => {
  return (
    <button
      className={[classes.Button, classes[props.btnType]].join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
