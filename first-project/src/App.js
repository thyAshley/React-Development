import React, { Component } from "react";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 20 },
      { name: "Steph", age: 26 },
    ],
  };

  switchNameHandler = () => {
    console.log("clicked");
    console.log(this);
  };

  render() {
    const { persons } = this.state;
    return (
      <div className="App">
        <h1>Hi, From React</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={persons[0].name} age={persons[0].age} />
        <Person name={persons[1].name} age={persons[1].age}>
          Hobbies: Riding
        </Person>
        <Person name={persons[2].name} age={persons[2].age} />
      </div>
    );
  }
}

export default App;
