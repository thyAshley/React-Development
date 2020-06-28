import * as actionTypes from "./actionTypes";
import axios from "../../axios-order";

export const addIngredient = (ingredient) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredient,
  };
};

export const removeIngredient = (ingredient) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredient,
  };
};

const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients,
  };
};

const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGERDIENTS_FAILED,
  };
};

export const initIngredient = () => {
  return (dispatch) => {
    axios
      .get("https://burgerapp-b32e1.firebaseio.com/ingredients.json")
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((err) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
