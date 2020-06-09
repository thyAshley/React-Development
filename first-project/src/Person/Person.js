import React from "react";

function Person(props) {
  return (
    <div>
      <p onClick={props.onClick}>
        I'm {props.name} and i am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.onChange} />
    </div>
  );
}

export default Person;
