import React from "react";
import css from "./stye.module.css";

const index = (props) => {
  return (
    <button className={css.button + " " + css[props.type]} onClick={props.onClick} >{props.text}</button>
  );
};

export default index;
