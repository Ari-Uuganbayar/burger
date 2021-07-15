import React, { Component } from "react";
import css from "./style.module.css";

import Burger from "../../components/Burger";
import BurgerControls from "../../components/BuildControls";
import OrderSummary from "../../components/OrderSummary";
import Modal from "../../components/General/Modal";

const INGREDIENT_PRICES = { salad: 150, cheese: 200, bacon: 800, meat: 1500 };
const INGREDIENT_NAMES = {
  salad: "Салад",
  bacon: "Гайхан мах",
  cheese: "Бяслаг",
  meat: "Үхрийн мах",
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 1000,
    purchasing: false,
    confirmOrder: false,
  };

  addIngredient = (type) => {
    const newIngredient = { ...this.state.ingredients };
    newIngredient[type]++;
    const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: newIngredient,
      totalPrice: newTotalPrice,
      purchasing: newTotalPrice > 1000,
    });
  };

  removeIngredient = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredient = { ...this.state.ingredients };
      newIngredient[type]--;
      const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({
        ingredients: newIngredient,
        totalPrice: newTotalPrice,
        purchasing: newTotalPrice > 1000,
      });
    }
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  orderContinue = () => {
    console.log("continue order daragdlaa.");
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    return (
      <div>
        <Modal
          show={this.state.confirmOrder}
          closeConfirmModal={this.closeConfirmModal}
        >
          <OrderSummary
            totalPrice={this.state.totalPrice}
            ingredients={this.state.ingredients}
            ingredientNames={INGREDIENT_NAMES}
            orderCancel={this.closeConfirmModal}
            orderContinue={this.orderContinue}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          ingredientNames={INGREDIENT_NAMES}
          purchasing={!this.state.purchasing}
          totalPrice={this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          showConfirmModal={this.showConfirmModal}
          closeConfirmModal={this.closeConfirmModal}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
