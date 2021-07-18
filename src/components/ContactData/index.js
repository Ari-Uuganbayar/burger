import React, { Component } from "react";
import css from "./style.module.css";

import Button from "../General/Button";

export default class ContactData extends Component {
  state = {
    address: {
      city: null,
      name: null,
      street: null,
    },
  };

  render() {
    return (
      <div className={css.contactData}>
        <input type="text" name="" placeholder="Таны нэр" />
        <input type="text" name="" placeholder="Хаяг" />
        <input type="text" name="" placeholder="Хот" />
        <Button type="success" text="Хадгалах" />
      </div>
    );
  }
}
