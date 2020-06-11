import React from "react";
import styled from "styled-components";

function Person(props) {
  const StyledDiv = styled.div`
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    margin: 16px auto;
    padding: 16px;
    text-align: center;
    width: 10%;

    @media (min-width: 500px) {
      width: 450px;
    }
  `;
  return (
    <StyledDiv>
      <p onClick={props.onDelete}>
        I'm {props.name} and i am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.onChange} />
    </StyledDiv>
  );
}

export default Person;
