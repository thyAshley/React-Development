import React from "react";

function UserInput(props) {
  return <input type="text" onChange={props.onChange} value={props.name} />;
}

export default UserInput;
