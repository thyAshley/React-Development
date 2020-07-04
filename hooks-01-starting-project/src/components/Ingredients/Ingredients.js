import React, { useReducer, useState, useEffect, useCallback } from "react";
import axios from "axios";

import IngredientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";

const ingredientReducer = (currentIngredient, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredient, action.ingredient];
    case "DELETE":
      return currentIngredient.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not reached");
  }
};

function Ingredients() {
  const [ings, dispatchIngs] = useReducer(ingredientReducer, []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const url =
    "https://reacthooks-practice-21b80.firebaseio.com/ingredients.json";

  useEffect(() => {
    console.log("Rendering Ingredients", ings);
  }, [ings]);

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);
    axios
      .post(url, {
        ...ingredient,
      })
      .then((response) => {
        setIsLoading(false);
        dispatchIngs({
          type: "ADD",
          ingredient: {
            id: response.data.name,
            ...ingredient,
          },
        });
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  const removeIngredientHandler = (id) => {
    setIsLoading(true);
    axios
      .delete(
        `https://reacthooks-practice-21b80.firebaseio.com/ingredients/${id}.json`
      )
      .then((response) => {
        setIsLoading(false);
        dispatchIngs({ type: "DELETE", id });
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  const filteredIngredientHandler = useCallback((ingredients) => {
    dispatchIngs({ type: "SET", ingredients });
  }, []);

  const clearError = () => {
    setError(null);
  };

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm onAdd={addIngredientHandler} loading={isLoading} />

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
