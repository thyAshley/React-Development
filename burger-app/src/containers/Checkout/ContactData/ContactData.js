import React, { Component } from "react";

import axios from "../../../axios.order";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Maxi",
        address: {
          street: "Teststreet 1",
          zipCode: "431432",
          country: "Singapore",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <Input
          inputType="input"
          type="text"
          name="name"
          placeholder="Your name"
        />
        <Input
          inputType="input"
          type="email"
          name="email"
          placeholder="Your email"
        />
        <Input
          inputType="input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input
          inputType="input"
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button btnType="Success" onClick={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) form = <Spinner />;
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
