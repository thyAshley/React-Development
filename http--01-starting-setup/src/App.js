import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import Blog from "./containers/Blog/Blog";
axios.defaults.baseURL = "https://my-json-server.typicode.com/typicode/demo";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
