import React from "react";

import classes from "./Order.module.css";

const Order = (props) => {
  const ingredients = [];
  for (let ingName in props.ingredients) {
    ingredients.push({
      name: ingName,
      amount: props.ingredients[ingName],
    });
  }

  const ingredientOutput = ingredients.map((ingredient) => {
    return (
      <span
        key={ingredient.name}
        style={{
          border: "1px solid grey",
          display: "inline-block",
          margin: "0 8px",
          padding: "5px",
          textTransform: "capitalize",
        }}
      >
        {ingredient.name} ({ingredient.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>{ingredientOutput} </p>
      <p>
        Price: <strong>$ {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
