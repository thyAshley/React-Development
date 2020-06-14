import React from "react";

const WithClass = (props) => {
  console.log(props.classes, props.children);
  return <div className={props.classes}>{props.children}</div>;
};

export default WithClass;
