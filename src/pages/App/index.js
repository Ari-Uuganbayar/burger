import React, { Component } from "react";
import css from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import SideBar from "../../components/SideBar";
import BurgerPage from "../BurgerPage";
import OrderPage from "../OrderPage";
import ShippingPage from "../ShippingPage";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  state = {
    showSidebar: false,
  };

  toggleSidebar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    return (
      <div>
        <Toolbar
          showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <main className={css.content}>
          <Switch>
            <Route path="/" component={BurgerPage} exact />
            <Route path="/orders" component={OrderPage} />
            <Route path="/ship" component={ShippingPage} />
          </Switch>
        </main>
      </div>
    );
  }
}
