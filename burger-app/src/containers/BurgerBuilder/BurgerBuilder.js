import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "../../axios.order";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionTypes from "../../store/actions";
const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4.0,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  // componentDidMount() {
  //   axios
  //     .get("https://burgerapp-b32e1.firebaseio.com/ingredients.json")
  //     .then((response) => {
  //       this.setState({ ingredient: response.data });
  //       this.updatePurchaseState(response.data);
  //     })
  //     .catch((err) => {
  //       this.setState({ error: true });
  //     });
  // }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, nextvalue) => sum + nextvalue, 0);

    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredient[type];
    const updatedCounted = oldCount + 1;
    const updatedIngredients = this.state.ingredient;
    updatedIngredients[type] = updatedCounted;
    const newPrice = INGREDIENT_PRICE[type] + this.state.totalPrice;
    this.setState(updatedIngredients);
    this.setState({ totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredient[type] > 0) {
      const newCount = this.state.ingredient[type] - 1;
      const updatedIngredients = this.state.ingredient;
      updatedIngredients[type] = newCount;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
      this.setState(updatedIngredients);
      this.setState({ totalPrice: newPrice });
      this.updatePurchaseState(updatedIngredients);
    }
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in this.state.ingredient) {
      queryParams.push(i + "=" + this.state.ingredient[i]);
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
    console.log(queryString);
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredient,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0 ? true : false;
    }

    let orderSummary = null;
    let burger = this.state.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredient) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredient} />
          <BuildControls
            onAdd={this.addIngredientHandler}
            onDeduct={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice.toFixed(2)}
            purchasable={this.state.purchaseable}
            onOrder={this.purchaseHandler}
          />
          );
        </Aux>
      );

      orderSummary = (
        <OrderSummary
          purchaseCancel={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
          ingredients={this.state.ingredient}
          price={this.state.totalPrice.toFixed(2)}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          modalClosed={this.purchaseCancelHandler}
          show={this.state.purchasing}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return { ingredients: state.ingredients };
};

const mapDispatchToProps = (store) => {
  return {
    onIngredientAdded: () => dispatch({ type: "ADD_INGREDIENT" }),
    onIngredientRemove: () => dispatch({ type: "REMOVE_INGREDIENT" }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
