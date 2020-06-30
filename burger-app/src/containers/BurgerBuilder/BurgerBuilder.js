import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "../../axios-order";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  };

  componentDidMount() {
    this.props.onInitIngredient();
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, nextvalue) => sum + nextvalue, 0);
    return sum > 0;
  }

  purchaseHandler = () => {
    if (this.props.isAuth) {
      this.setState({ purchasing: true });
    } else {
      this.props.onSetRedirectPath("/checkout");
      this.props.history.push("/auth");
    }
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push("/checkout");
  };

  render() {
    console.log(this.props);
    const disabledInfo = {
      ...this.props.ing,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0 ? true : false;
    }

    let orderSummary = null;
    let burger = this.props.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.props.ing) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ing} />
          <BuildControls
            onAdd={this.props.onIngredientAdded}
            onDeduct={this.props.onIngredientRemove}
            disabled={disabledInfo}
            price={this.props.totalPrice.toFixed(2)}
            purchasable={this.updatePurchaseState(this.props.ing)}
            onOrder={this.purchaseHandler}
            isAuth={this.props.isAuth}
          />
          );
        </Aux>
      );

      orderSummary = (
        <OrderSummary
          purchaseCancel={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
          ingredients={this.props.ing}
          price={this.props.totalPrice.toFixed(2)}
        />
      );
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
  return {
    ing: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuth: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ing) => dispatch(actions.addIngredient(ing)),
    onIngredientRemove: (ing) => dispatch(actions.removeIngredient(ing)),
    onInitIngredient: () => dispatch(actions.initIngredient()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
