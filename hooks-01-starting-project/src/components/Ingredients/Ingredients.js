import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import IngredientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";

function Ingredients() {
  const [ings, setIngs] = useState([]);

  const url =
    "https://reacthooks-practice-21b80.firebaseio.com/ingredients.json";

  useEffect(() => {
    console.log("Rendering Ingredients", ings);
  }, [ings]);

  const addIngredientHandler = (ingredient) => {
    axios
      .post(url, {
        ...ingredient,
      })
      .then((response) => {
        console.log(response.data);
        setIngs((prevIng) => [
          ...prevIng,
          { id: response.data.name, ...ingredient },
        ]);
      });

    console.log(ings);
  };

  const removeIngredientHandler = (id) => {
    const updatedIng = [...ings].filter((ingredient) => ingredient.id !== id);
    setIngs(updatedIng);
  };

  const filteredIngredientHandler = useCallback((ingredient) => {
    setIngs(ingredient);
  }, []);

  return (
    <div className="App">
      <IngredientForm onAdd={addIngredientHandler} />

      <section>
        <Search onLoadIngredient={filteredIngredientHandler} />
        <IngredientList
          ingredients={ings}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
