import React from "react";
import ValidationComponent from "./Validation/Validation";
import Char from "./Char/Char";
class App extends React.Component {
  state = {
    userInput: "",
  };

  textChangeListener = (event) => {
    const text = event.target.value;
    this.setState({ userInput: text });
  };

  textRemoveHandler = (index) => {
    let text = this.state.userInput.split("");
    text.splice(index, 1);
    const userInput = text.join("");
    this.setState({ userInput });
  };
  render() {
    const charList = [...this.state.userInput].map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          onClick={() => {
            this.textRemoveHandler(index);
          }}
        />
      );
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.textChangeListener}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <ValidationComponent textLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
