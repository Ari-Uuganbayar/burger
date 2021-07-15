import React from "react";
import css from "./style.module.css";

const index = (props) => {
  return (
    <div className={css.buildControl}>
      <div className={css.label}> {props.text} </div>
      <button
        className={css.less}
        disabled={props.disabledIngredients[props.type]}
        onClick={() => props.removeIngredient(props.type)}
      >
        {" "}
        Хасах{" "}
      </button>
      <button
        className={css.more}
        onClick={() => props.addIngredient(props.type)}
      >
        {" "}
        Нэмэх{" "}
      </button>
    </div>
  );
};

export default index;
