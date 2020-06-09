import React from "react";

function Person(props) {
  return (
    <div>
      <p>
        I'm {props.name} and i am {props.age} years old
      </p>
      <p>{props.children}</p>
    </div>
  );
}

export default Person;
