import React, { useReducer, useState, useCallback } from "react";
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

const httpReducer = (currentHttp, action) => {
  switch (action.type) {
    case "SEND_REQUEST":
      return { ...currentHttp, loading: true, error: null };
    case "RESPONSE":
      return { ...currentHttp, loading: false };
    case "ERROR":
      return { ...currentHttp, loading: false, error: action.error };
    case "CLEAR":
      return { ...currentHttp, error: null };
    default:
      throw new Error("Should not reached");
  }
};

function Ingredients() {
  const [ings, dispatchIngs] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });

  const url =
    "https://reacthooks-practice-21b80.firebaseio.com/ingredients.json";

  const addIngredientHandler = (ingredient) => {
    dispatchHttp({ type: "SEND_REQUEST" });
    axios
      .post(url, {
        ...ingredient,
      })
      .then((response) => {
        dispatchHttp({ type: "RESPONSE" });
        dispatchIngs({
          type: "ADD",
          ingredient: {
            id: response.data.name,
            ...ingredient,
          },
        });
      })
      .catch((err) => {
        dispatchHttp({ type: "ERROR", error: err.message });
      });
  };

  const removeIngredientHandler = (id) => {
    dispatchHttp({ type: "SEND_REQUEST" });
    axios
      .delete(
        `https://reacthooks-practice-21b80.firebaseio.com/ingredients/${id}.json`
      )
      .then((response) => {
        dispatchHttp({ type: "RESPONSE" });
        dispatchIngs({ type: "DELETE", id });
      })
      .catch((err) => {
        dispatchHttp({ type: "ERROR", error: err.message });
      });
  };

  const filteredIngredientHandler = useCallback((ingredients) => {
    dispatchIngs({ type: "SET", ingredients });
  }, []);

  const clearError = () => {
    dispatchHttp({ type: "CLEAR" });
  };

  return (
    <div className="App">
      {httpState.error && (
        <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
      )}
      <IngredientForm
        onAdd={addIngredientHandler}
        loading={httpState.loading}
      />

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
