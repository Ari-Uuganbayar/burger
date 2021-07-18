import React from "react";
import css from "./style.module.css";

import MenuItem from "../MenuItem";

const Menu = (props) => {
  return (
    <div>
      <ul className={css.menu}>
        <MenuItem link="/" exact>
          ШИНЭ ЗАХИАЛГА
        </MenuItem>
        <MenuItem link="/orders"> Захилга </MenuItem>
      </ul>
    </div>
  );
};

export default Menu;
