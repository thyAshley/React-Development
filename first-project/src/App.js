import React, { Component, useState } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 20 },
      { name: "Steph", age: 26 },
    ],
    otherState: "other value",
    showPersons: false,
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 20 },
        { name: "Steph", age: 24 },
      ],
    });
  };
  togglePersonsHandler = () => {
    const showPersons = !this.state.showPersons;
    this.setState({ showPersons });
  };

  render() {
    const { persons } = this.state;
    const style = {
      backgroundColor: "white",
      border: "1px solid blue",
      cursor: "pointer",
      font: "inherit",
    };
    return (
      <div className="App">
        <h1>Hi, From React</h1>
        <button
          style={style}
          onClick={() => {
            this.togglePersonsHandler();
          }}
        >
          Switch Name
        </button>
        {this.state.showPersons && (
          <div>
            <Person name={persons[0].name} age={persons[0].age} />
            <Person
              name={persons[1].name}
              age={persons[1].age}
              onClick={this.switchNameHandler.bind(this, "Max!")}
              onChange={this.nameChangeHandler}
            >
              Hobbies: Riding
            </Person>
            <Person name={persons[2].name} age={persons[2].age} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
