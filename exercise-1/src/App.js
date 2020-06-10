import React, { Component } from "react";
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "Maxi",
  };

  updateUserHandler = (event) => {
    const username = event.target.value;
    this.setState({ username });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          onChange={this.updateUserHandler}
          name={this.state.username}
        />
        <UserOutput name={this.state.username}>Come and change me</UserOutput>
        <UserOutput name={this.state.username} />
      </div>
    );
  }
}

export default App;
