import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  const authContext = useContext(AuthContext);
  useEffect(() => {
    console.log("[Cockpit.js] use effects");
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup in useEffect");
    };
  }, []);

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
      <button
        ref={toggleBtnRef}
        className={btnClass.join(" ")}
        onClick={props.togglePerson}
      >
        Toggle Me
      </button>
      <button className={classes.Button} onClick={authContext.login}>
        Log in
      </button>
    </React.Fragment>
  );
};

export default React.memo(Cockpit);
