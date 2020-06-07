import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }

  updateCounter(value) {
    this.setState((prevState) => {
      return { count: prevState.count + value };
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.updateCounter(-1)}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.updateCounter(1)}>+</button>
      </div>
    );
  }
}

export default Counter;
