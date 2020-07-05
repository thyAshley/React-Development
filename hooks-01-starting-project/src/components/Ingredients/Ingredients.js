import React, { useReducer, useEffect, useCallback, useMemo } from "react";

import IngredientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../../hooks/http";

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
  const {
    isLoading,
    error,
    data,
    sendRequest,
    reqEx,
    reqIdentifier,
    clear,
  } = useHttp();

  useEffect(() => {
    if (!isLoading && !error && reqIdentifier === "REMOVE_INGREDIENT") {
      dispatchIngs({ type: "DELETE", id: reqEx });
    } else if (!isLoading && !error && reqIdentifier === "ADD_INGREDIENT") {
      dispatchIngs({ type: "ADD", ingredient: { id: data.name, ...reqEx } });
    }
  }, [data, reqEx, reqIdentifier, isLoading, error]);

  const addIngredientHandler = useCallback(
    (ingredient) => {
      sendRequest(
        `
    https://reacthooks-practice-21b80.firebaseio.com/ingredients.json`,
        "POST",
        ingredient,
        ingredient,
        "ADD_INGREDIENT"
      );
    },
    [sendRequest]
  );

  const removeIngredientHandler = useCallback(
    (id) => {
      sendRequest(
        `
    https://reacthooks-practice-21b80.firebaseio.com/ingredients/${id}.json`,
        "DELETE",
        null,
        id,
        "REMOVE_INGREDIENT"
      );
    },
    [sendRequest]
  );

  const filteredIngredientHandler = useCallback((ingredients) => {
    dispatchIngs({ type: "SET", ingredients });
  }, []);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={ings}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [ings, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm onAdd={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredient={filteredIngredientHandler} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
