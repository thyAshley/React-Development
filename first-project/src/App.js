import React, { Component, useState } from "react";
import Person from "./Person/Person";

// const App = (props) => {
//   const [personState, setPersonsState] = useState({
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Manu", age: 20 },
//       { name: "Steph", age: 26 },
//     ],
//   });

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Maximlian", age: 28 },
//         { name: "Manu", age: 20 },
//         { name: "Steph", age: 24 },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, From React</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personState.persons[0].name}
//         age={personState.persons[0].age}
//       />
//       <Person
//         name={personState.persons[1].name}
//         age={personState.persons[1].age}
//         onClick={switchNameHandler}
//       >
//         Hobbies: Riding
//       </Person>
//       <Person
//         name={personState.persons[2].name}
//         age={personState.persons[2].age}
//       />
//     </div>
//   );
// };

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 20 },
      { name: "Steph", age: 26 },
    ],
    otherState: "other value",
  };

  switchNameHandler = (newName) => {
    console.log(this);
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 20 },
        { name: "Steph", age: 24 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 20 },
        { name: "Steph", age: 24 },
      ],
    });
  };

  render() {
    const { persons } = this.state;
    return (
      <div className="App">
        <h1>Hi, From React</h1>
        <button
          onClick={() => {
            return this.switchNameHandler("Maxiimus");
          }}
        >
          Switch Name
        </button>
        <Person name={persons[0].name} age={persons[0].age} />
        <Person
          name={persons[1].name}
          age={persons[1].age}
          onClick={this.switchNameHandler.bind(this, "Max!")}
          onChange={this.nameChangeHandler}
        >
          Hobbies: Riding
        </Person>
        <Person name={persons[2].name} age={persons[2].age} />
      </div>
    );
  }
}

export default App;
