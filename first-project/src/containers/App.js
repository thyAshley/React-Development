import React, { Component } from "react";

import Persons from "../components/Persons/Persons";
import classes from "./App.module.css";
import Cockpit from "../components/Cockpit/Cockpit";
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
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            onChange={this.nameChangeHandler}
            delete={this.deletePersonHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          length={this.state.persons.length}
          togglePerson={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
