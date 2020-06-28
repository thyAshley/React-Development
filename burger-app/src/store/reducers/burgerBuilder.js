import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      const AddIngredient = {
        [action.ingredient]: state.ingredients[action.ingredient] + 1,
      };
      const AddIngredients = updateObject(state.ingredients, AddIngredient);
      const AddState = {
        ingredients: AddIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredient],
      };
      return updateObject(state, AddState);

    case actionTypes.REMOVE_INGREDIENT:
      const reduceIngredient = {
        [action.ingredient]: state.ingredients[action.ingredient] - 1,
      };
      const reduceIngredients = updateObject(
        state.ingredients,
        reduceIngredient
      );
      const reduceState = {
        ingredients: reduceIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredient],
      };
      return updateObject(state, reduceState);

    case actionTypes.SET_INGREDIENTS:
      return updateObject(state, {
        ...state,
        ingredients: action.ingredients,
        error: false,
        totalPrice: 4,
      });

    case actionTypes.FETCH_INGERDIENTS_FAILED:
      return updateObject(state, { error: true });

    default:
      return state;
  }
};

export default reducer;
