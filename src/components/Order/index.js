import React from "react";
import css from "./style.module.css";

const Order = (props) => {
  return (
    <div className={css.order}>
      <p>
        <strong>Орц: </strong>
        Гахайн мах: {props.order.ingredients.bacon}, Бяслаг:{" "}
        {props.order.ingredients.cheese}, Салад: {props.order.ingredients.salad}
        , Үхрийн мах: {props.order.ingredients.meat}
      </p>
      <p>
        <strong>Хаяг:</strong> {props.order.address.city} |{" "}
        {props.order.address.name} | {props.order.address.street}
      </p>
      <p>
        <strong>Үнийн дүн:</strong> {props.order.totalPrice}₮
      </p>
    </div>
  );
};

export default Order;
