import React from "react";
import css from "./stye.module.css";

const Button = (props) => {
  return (
    <button
      className={css.button + " " + css[props.type]}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
