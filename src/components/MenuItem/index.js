import React from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";

const MenuItem = (props) => {
  return (
    <div>
      <li className={css.menuItem}>
        <NavLink
          activeClassName={css.active}
          to={props.link}
          exact={props.exact}
        >
          {props.children}
        </NavLink>
      </li>
    </div>
  );
};

export default MenuItem;
