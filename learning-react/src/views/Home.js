import React from "react";

import HelloWorld from "../Components/HelloWorld";

function Home() {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Home Page</h1>
      <p>This is the home page</p>
      <HelloWorld name="Josh" />
    </div>
  );
}

export default Home;
