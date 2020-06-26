import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.personAddHandler} />
        {this.props.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => {
              this.props.personDeletedHandler(person.id);
            }}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.person,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    personAddHandler: () => dispatch({ type: "ADD_PERSON" }),
    personDeletedHandler: (id) => dispatch({ type: "DELETE_PERSON", id: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
