import React from "react";
import "./Char.css";
function CharComponent(props) {
  return (
    <div className="CharComponent" onClick={() => props.onClick(props.index)}>
      {props.character}
    </div>
  );
}

export default CharComponent;
