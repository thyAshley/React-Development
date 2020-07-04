import React, { useState } from "react";

import IngredientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";

function Ingredients() {
  const [ings, setIngs] = useState([]);

  const addIngredientHandler = (ingredient) => {
    setIngs((prevIng) => [
      ...prevIng,
      { id: Math.random().toString(), ingredient },
    ]);
  };

  return (
    <div className="App">
      <IngredientForm addIngredientHandler />

      <section>
        <Search />
        <IngredientList ingredients={ings} />
      </section>
    </div>
  );
}

export default Ingredients;
