import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Person.js] ShouldComponentUpdate");
  //   return nextProps.persons !== this.props.persons;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("[Persons.js] Component Did Update");
  }

  componentWillUnmount() {
    console.log("[Persons.js] Unmount");
  }

  render() {
    const props = this.props;
    console.log("[Person.js] Rendering...");
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
}
export default Persons;
