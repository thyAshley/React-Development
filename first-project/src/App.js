import React, { Component } from "react";
import Person from "./Person/Person";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, From React</h1>
        <Person />
      </div>
    );
  }
}

export default App;
