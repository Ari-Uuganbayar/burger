import React from "react";
import css from "./style.module.css";

import logo from "../../assets/images/logo.jpg";

const Logo = () => {
  return (
    <div className={css.logo}>
      <img src={logo} alt="" />
    </div>
  );
};

export default Logo;
