const initial_state = {
  person: [],
};

const reducer = (currentState = initial_state, actions) => {
  let newPersonArray;
  switch (actions.type) {
    case "ADD_PERSON":
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: actions.personDetail.name,
        age: actions.personDetail.age,
      };
      newPersonArray = currentState.person.concat(newPerson);
      return {
        person: newPersonArray,
      };

    case "DELETE_PERSON":
      newPersonArray = currentState.person.filter(
        (person) => person.id !== actions.id
      );
      return {
        person: newPersonArray,
      };

    default:
      return currentState;
  }
};

export default reducer;
