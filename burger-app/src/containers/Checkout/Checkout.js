import React, { Component } from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
    totalPrice: 0,
  };

  componentDidMount() {
    let searchParams = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of searchParams.entries()) {
      if (this.state.ingredients[param[0]]) {
        ingredients[param[0]] = +param[1];
      }
      if (param[0] === "price") {
        price = param[1];
      }
    }
    this.setState({ ingredients: ingredients });
    this.setState({ totalPrice: price });
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <React.Fragment>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancel={this.checkoutCancelHandler}
          checkoutContinue={this.checkoutContinueHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
            />
          )}
        />
      </React.Fragment>
    );
  }
}

export default Checkout;
