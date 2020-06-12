import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] use effects");
    const timer = setTimeout(() => {
      console.log("finish");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleanup in useEffect");
    };
  }, [props.showPersons]);

  const assignedClasses = [];
  if (props.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  let btnClass = [classes.Button];
  if (props.showPersons) {
    btnClass.push(classes.Red);
  }

  return (
    <React.Fragment>
      <h1>Hi, From React</h1>
      <p className={assignedClasses.join(" ")}>It is working</p>
      <button className={btnClass.join(" ")} onClick={props.togglePerson}>
        Toggle Me
      </button>
    </React.Fragment>
  );
};

export default React.memo(Cockpit);
