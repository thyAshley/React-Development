import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./views/Home";
import About from "./views/About";

function App() {
  return (
    <>
      <Router>
        <Header />

        <div className="p-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
