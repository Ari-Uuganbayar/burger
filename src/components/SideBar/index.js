import React from "react";
import css from "./style.module.css";

import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../General/Shadow";

const SideBar = (props) => {
  let classes = [css.sideBar, css.close];

  if (props.showSidebar) {
    classes = [css.sideBar, css.open];
  }

  return (
    <div>
      <Shadow show={props.showSidebar} onClick={props.toggleSidebar} />
      <div className={classes.join(" ")}>
        <div className={css.logo}>
          <Logo />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
