import React from "react";
import classes from "./Person.module.css";
function Person(props) {
  return (
    <div className={classes.Person}>
      <p onClick={props.onDelete}>
        I'm {props.name} and i am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.onChange} />
    </div>
  );
}

export default Person;
