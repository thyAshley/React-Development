import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import classes from "./App.module.css";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Constructor lifecycle");
    this.state = {
      persons: [
        { id: 0, name: "Max", age: 28 },
        { id: 1, name: "Manu", age: 20 },
        { id: 2, name: "Steph", age: 26 },
      ],
      otherState: "other value",
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps");
    return state;
  }

  componentDidMount() {
    console.log("[App.js] Component Did Mount");
  }

  nameChangeHandler = (event, id) => {
    const index = this.state.persons.findIndex((p) => p.id === id);
    const persons = [...this.state.persons];
    persons[index] = { ...this.state.persons[index] };
    persons[index].name = event.target.value;
    this.setState((prevState) => {
      return {
        persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  togglePersonsHandler = () => {
    const showPersons = !this.state.showPersons;
    this.setState({ showPersons });
  };

  deletePersonHandler = (person) => {
    let persons = [...this.state.persons];
    persons.splice(person, 1);
    this.setState({ persons });
  };

  toggleCockpit = () => {
    const showCockpit = !this.state.showCockpit;
    this.setState({ showCockpit });
  };

  loginHandler = () => {
    this.setState((prevState) => {
      return {
        authenticated: !prevState.authenticated,
      };
    });
  };
  render() {
    console.log("[App.js] Render");
    let persons = null;
    let cockpit = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            onChange={this.nameChangeHandler}
            delete={this.deletePersonHandler}
            isAuthenticated={this.state.authenticated}
          />
        </div>
      );
    }
    if (this.state.showCockpit) {
      cockpit = (
        <Cockpit
          length={this.state.persons.length}
          togglePerson={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          login={this.loginHandler}
        />
      );
    }
    return (
      <div className={classes.App}>
        <button onClick={this.toggleCockpit}>Remove Cockpit</button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          {cockpit}
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
