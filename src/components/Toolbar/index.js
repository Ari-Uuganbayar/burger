import React from "react";
import css from "./style.module.css";

import Logo from "../Logo";
import Menu from "../Menu";
import MenuHamburger from "../MenuHamburger";

const Toolbar = (props) => {
  return (
    <header className={css.toolbar}>
      <MenuHamburger toggleSidebar={props.toggleSidebar} />
      <Logo />
      <nav className={css.hideOnMobile}>
        <Menu />
      </nav>
    </header>
  );
};

export default Toolbar;
