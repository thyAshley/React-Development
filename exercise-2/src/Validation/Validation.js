import React from "react";

function ValidationComponent(props) {
  let message = "Text ";
  message += props.textLength <= 5 ? "too short" : " long enough";
  return <p>{message}</p>;
}

export default ValidationComponent;
