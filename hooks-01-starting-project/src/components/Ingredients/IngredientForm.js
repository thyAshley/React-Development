import React, { useState } from "react";

import LoadingIndicator from "../UI/LoadingIndicator";
import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  console.log("RENDERING INGREDIENT FORM");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAdd({
      title,
      amount,
    });
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              id="title"
              value={title}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              type="number"
              id="amount"
              value={amount}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
