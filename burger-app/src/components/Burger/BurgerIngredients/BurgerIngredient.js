import React from "react";

import classes from "./BurgerIngredient.module.css";

const BurgerIngredient = (props) => {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom":
      ingredient = <div ClassName={classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div ClassName={classes.Meat}></div>;
      break;
    case "salad":
      ingredient = <div ClassName={classes.Salad}></div>;
      break;
    case "cheese":
      ingredient = <div ClassName={classes.Cheese}></div>;
      break;
    case "bacon":
      ingredient = <div ClassName={classes.Bacon}></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

export default BurgerIngredient;
