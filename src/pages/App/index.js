import React, { Component } from "react";
import css from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <main className={css.content}>
          <BurgerPage />
        </main>
      </div>
    );
  }
}
