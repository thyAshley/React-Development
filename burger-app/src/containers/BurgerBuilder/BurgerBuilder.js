import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredient: {
      cheese: 0,
      salad: 0,
      meat: 0,
      bacon: 0,
    },
    totalPrice: 4.0,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredient[type];
    const updatedCounted = oldCount + 1;
    const updatedIngredients = this.state.ingredient;
    updatedIngredients[type] = updatedCounted;
    const newPrice = INGREDIENT_PRICE[type] + this.state.totalPrice;
    this.setState(updatedIngredients);
    this.setState({ totalPrice: newPrice });
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredient[type] > 0) {
      const newCount = this.state.ingredient[type] - 1;
      const updateIngredients = this.state.ingredient;
      updateIngredients[type] = newCount;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
      this.setState(updateIngredients);
      this.setState({ totalPrice: newPrice });
    }
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredient,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0 ? true : false;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredient} />
        <BuildControls
          onAdd={this.addIngredientHandler}
          onDeduct={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
