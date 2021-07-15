import React from "react";
import css from "./style.module.css";

import BurgerIngredient from "../BurgerIngredient";

const Burger = (props) => {
  const items = Object.entries(props.ingredients);
  let content = [];

  items.map((item, index) => {
    for (let i = 0; i < item[1]; i++) {
      content.push(
        <BurgerIngredient key={item[0] + (i + 1)} className="" type={item[0]} />
      );
    }
  });

  if (content.length === 0)
    content = <p> Хачиртай талхны орцыг сонгоно уу... </p>;

  return (
    <div className={css.burger}>
      <BurgerIngredient className="" type="breadTop" />
      {content}
      <BurgerIngredient type="breadBottom" />
    </div>
  );
};

export default Burger;
