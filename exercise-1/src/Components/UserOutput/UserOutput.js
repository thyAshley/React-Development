import React from "react";
import "./UserOutput.css";
function UserOutput(props) {
  return (
    <div className="UserOutput">
      <p>Username: {props.name}</p>
      <p>{props.children}</p>
    </div>
  );
}

export default UserOutput;
