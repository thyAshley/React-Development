const redux = require("redux");

const createStore = redux.createStore;

const initialState = { counter: 0 };
//create reducer
function reducer(currentState = initialState, action) {
  if (action.type === "INCREASE") {
    return {
      counter: currentState.counter + 1,
    };
  }
  if (action.type === "DECREASE") {
    return {
      counter: currentState.counter + action.value,
    };
  }
  return currentState;
}

// create store
const store = createStore(reducer);

// create Subscriber
store.subscribe(() => {
  console.log("[Subscriber]", store.getState());
});
// create dispatcher
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "DECREASE", value: -4 });

console.log(store.getState());
