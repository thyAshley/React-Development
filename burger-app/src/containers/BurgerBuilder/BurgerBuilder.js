import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
  state = {
    ingredient: {
      cheese: 4,
      salad: 0,
      meat: 2,
      bacon: 1,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredient} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
