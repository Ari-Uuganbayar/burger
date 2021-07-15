import React from "react";
import style from "./style.module.css";

import Logo from "../Logo";

const Toolbar = () => {
  return (
    <header className={style.toolbar}>
      <div className="">Hamburger</div>
      <Logo />
      <div className="">Цэс</div>
    </header>
  );
};

export default Toolbar;
