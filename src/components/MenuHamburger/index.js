import React from "react";
import css from "./style.module.css";

const MenuHamburger = (props) => {
  return (
    <div className={css.menuHamburger} onClick={props.toggleSidebar}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MenuHamburger;
