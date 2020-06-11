import React, { Component } from "react";

import Person from "./Person/Person";
import classes from "./App.module.css";

class App extends Component {
  state = {
    persons: [
      { id: 0, name: "Max", age: 28 },
      { id: 1, name: "Manu", age: 20 },
      { id: 2, name: "Steph", age: 26 },
    ],
    otherState: "other value",
    showPersons: false,
  };

  nameChangeHandler = (event, id) => {
    const index = this.state.persons.findIndex((p) => p.id === id);
    const persons = [...this.state.persons];
    persons[index] = { ...this.state.persons[index] };
    persons[index].name = event.target.value;
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const showPersons = !this.state.showPersons;
    this.setState({ showPersons });
  };

  deletePersonHandler = (person) => {
    let persons = [...this.state.persons];
    persons.splice(person, 1);
    this.setState({ persons });
  };

  render() {
    let person = null;
    let btnClass = [classes.Button];
    if (this.state.showPersons) {
      person = this.state.persons.map((person, index) => {
        return (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            onChange={(event) => {
              this.nameChangeHandler(event, person.id);
            }}
            onDelete={() => {
              this.deletePersonHandler(index);
            }}
          />
        );
      });
      btnClass.push(classes.Red);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, From React</h1>
        <p>It is working</p>
        <button
          className={btnClass.join(" ")}
          onClick={() => {
            this.togglePersonsHandler();
          }}
        >
          Toggle Person
        </button>
        {person}
      </div>
    );
  }
}

export default App;
