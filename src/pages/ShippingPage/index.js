import React, { Component } from "react";
import css from "./style.module.css";

import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import ContactData from "../../components/ContactData";
import { Route } from "react-router-dom";

export default class ShippingPage extends Component {
  state = {
    ingredients: {},
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = [];
    for (let item of query) {
      ingredients[item[0]] = item[1];
    }

    this.setState({ ingredients });
  }

  showContactData = () => {
    this.props.history.push("/ship/contact");
  };

  render() {
    return (
      <div className={css.shippingPage}>
        <p style={{ fontSize: "20px" }}> Таны захиалга </p>
        <Burger ingredients={this.state.ingredients} />
        <Button
          type="danger"
          onClick={this.props.history.goBack}
          text="ЗАХИАЛГЫГ ЦУЦЛАХ"
        />
        <Button
          type="success"
          onClick={this.showContactData}
          text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
        />
        <Route path="/ship/contact" component={ContactData} />
      </div>
    );
  }
}
