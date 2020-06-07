import React from "react";
import HelloWorld from "./Components/HelloWorld";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <HelloWorld name="Josh" />
      <Footer />
    </>
  );
}

export default App;
