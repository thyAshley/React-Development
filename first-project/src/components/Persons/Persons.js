import React from "react";
import Person from "./Person/Person";

function Persons(props) {
  const persons = props.persons.map((person, index) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        key={person.id}
        onChange={(event) => {
          props.onChange(event, person.id);
        }}
        onDelete={() => {
          props.delete(index);
        }}
      />
    );
  });
  return persons;
}

export default Persons;
