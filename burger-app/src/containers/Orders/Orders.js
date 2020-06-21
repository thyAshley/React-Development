import React, { Component } from "react";

import Order from "../../components/Order/Order";
import axios from "../../axios.order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrder = [];
        for (let key in res.data) {
          fetchedOrder.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ loading: false, orders: fetchedOrder });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    const orders = this.state.orders.map((order) => {
      return (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}
        />
      );
    });
    console.log(this.state.orders);
    return <div>{orders}</div>;
  }
}

export default withErrorHandler(Orders, axios);
