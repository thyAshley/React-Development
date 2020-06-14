import React from "react";

import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import BuildControls from "./BuildControls/BuildControls";
import classes from "./Burger.module.css";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, idx) => {
        return <BurgerIngredient key={igKey + idx} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
      <BuildControls />
    </div>
  );
};

export default Burger;
