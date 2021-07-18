import React, { Component } from "react";
import css from "./style.module.css";

import axios from "../../axios-order";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";

export default class OrderPage extends Component {
  state = {
    order: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios()
      .get("/order.json")
      .then((res) => {
        this.setState({ order: Object.entries(res.data).reverse() });
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div className={css.orderPage}>
        {this.state.loading ? (
          <Spinner />
        ) : (
          this.state.order.map((item) => (
            <Order key={item[0]} order={item[1]} />
          ))
        )}
      </div>
    );
  }
}
