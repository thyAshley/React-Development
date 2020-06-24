import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  let inputElement = null;
  switch (props.elementtype) {
    case "input":
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementconfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={classes.InputElement}
          {...props.elementconfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={classes.InputElement}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementconfig.options.map((el) => {
            return (
              <option key={el.value} value={el.value}>
                {el.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementconfig}
          onChange={props.changed}
          value={props.value}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label} htmlFor={props.elementconfig}></label>
      {inputElement}
    </div>
  );
};

export default Input;
