import React from "react";
import css from "./style.module.css";

import Shadow from "../Shadow";

const index = (props) => {
  return (
    <div className="">
      <Shadow show={props.show} closeConfirmModal={props.closeConfirmModal} />
      <div
        className={css.modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default index;
