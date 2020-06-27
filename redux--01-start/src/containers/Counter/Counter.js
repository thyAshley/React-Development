import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreators from "../../store/actions/index";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button
          onClick={() => {
            this.props.onSaveResult(this.props.counter);
          }}
        >
          Store Result
        </button>
        <ul>
          {this.props.result.map((res) => {
            return (
              <li
                key={res.id}
                onClick={() => {
                  this.props.onDeleteResult(res.id);
                }}
              >
                {res.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.ctr.counter,
    result: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(5)),
    onSubtractCounter: () => dispatch(actionCreators.subtract(5)),
    onSaveResult: (result) => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
