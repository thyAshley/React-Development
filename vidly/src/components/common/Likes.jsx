import React from "react";

function Likes(props) {
  let heart = "fa fa-heart";
  if (!props.liked) heart += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      className={heart}
      aria-hidden="true"
      onClick={props.onClick}
    ></i>
  );
}

export default Likes;
