import React from "react";
import css from "./style.module.css";

import BuildControl from "../BuildControl";

const BuildControls = (props) => {
  return (
    <div className={css.buildControls}>
      <h1> Бургерийн үнэ: {props.totalPrice}₮ </h1>

      {Object.keys(props.ingredientNames).map((item) => (
        <BuildControl
          key={item}
          disabledIngredients={props.disabledIngredients}
          addIngredient={props.addIngredient}
          removeIngredient={props.removeIngredient}
          type={item}
          text={props.ingredientNames[item]}
        />
      ))}

      <button
        className={css.orderButton}
        disabled={props.purchasing}
        onClick={props.showConfirmModal}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

export default BuildControls;
