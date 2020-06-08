import React, { Component } from "react";
import Counter from "./Counter";

class CounterList extends Component {
  render() {
    return (
      <main className="container">
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </main>
    );
  }
}

export default CounterList;
