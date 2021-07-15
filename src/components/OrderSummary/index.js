import React from "react";
import css from "./style.module.css";

import Button from "../General/Button";

const index = (props) => {
  return (
    <div>
      <h3> Таны захиалга</h3>
      <p> Таны сонгон орцууд: </p>

      <ul>
        {Object.keys(props.ingredients).map((item) => (
          <li key={item}>
            {" "}
            {props.ingredientNames[item]}: {props.ingredients[item]}{" "}
          </li>
        ))}
      </ul>
      <p>
        <strong> Захиалгын дүн: {props.totalPrice}₮ </strong>
      </p>
      <Button type="danger" text="Татгалзах" onClick={props.orderCancel} />
      <Button
        type="success"
        text="Үргэлжлүүлэх"
        onClick={props.orderContinue}
      />
    </div>
  );
};

export default index;
