import React from "react";

function UserOutput(props) {
  return (
    <div>
      <p>Username: {props.name}</p>
      <p>{props.children}</p>
    </div>
  );
}

export default UserOutput;
