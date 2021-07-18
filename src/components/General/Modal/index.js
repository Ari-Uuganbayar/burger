import React from "react";
import css from "./style.module.css";

import Shadow from "../Shadow";

const Modal = (props) => {
  return (
    <div className="">
      <Shadow show={props.show} onClick={props.closeConfirmModal} />
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

export default Modal;
