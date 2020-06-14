import React, { Component } from "react";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    console.log("mounted");
    console.log(this.context);
    this.inputElement.current.focus();
  }
  render() {
    console.log("[Person.js] rendering");
    return (
      <React.Fragment>
        {this.context.authenticated ? <p>Logged In</p> : <p>Please Log in</p>}
        <p onClick={this.props.onDelete}>
          I'm {this.props.name} and i am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.onChange}
          ref={this.inputElement}
        />
      </React.Fragment>
    );
  }
}

Person.propTypes = {
  onDelete: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  onChange: PropTypes.func,
};

export default Person;
