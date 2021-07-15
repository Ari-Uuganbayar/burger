import React from "react";
import css from "./style.module.css";

const BurgerIngredient = (props) => {
  if (props.type === "breadTop")
    return (
      <div className={css.breadTop}>
        <div className={css.seed}></div>
        <div className={css.seed + " " + css.second}></div>
        <div className={css.seed + " " + css.third}></div>
        <div className={css.seed + " " + css.fourth}></div>
      </div>
    );
  if (props.type === "salad") return <div className={css.salad}></div>;
  if (props.type === "cheese") return <div className={css.cheese}></div>;
  if (props.type === "meat") return <div className={css.meat}></div>;
  if (props.type === "bacon") return <div className={css.bacon}></div>;
  if (props.type === "breadBottom")
    return <div className={css.breadBottom}></div>;
  else return <div className="">...</div>;
};

export default BurgerIngredient;
