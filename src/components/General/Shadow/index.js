import React from "react";
import css from "./style.module.css";

const index = (props) => {
  return props.show ? (
    <div className={css.shadow} onClick={props.closeConfirmModal}></div>
  ) : null;
};

export default index;
