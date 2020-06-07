import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  function getTime() {
    return new Date().toLocaleTimeString();
  }
  return (
    <div>
      <div>Current Time</div>
      <div>{getTime()}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
