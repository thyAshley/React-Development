import React from "react";

import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import classes from "./Burger.module.css";
const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, idx) => {
      return <BurgerIngredient key={igKey + idx} type={igKey} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
