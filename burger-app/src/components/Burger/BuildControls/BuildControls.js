import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price}</strong>
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            onAdd={() => {
              props.onAdd(ctrl.type);
            }}
            onDeduct={() => {
              props.onDeduct(ctrl.type);
            }}
            key={ctrl.label}
            label={ctrl.type}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
      <button
        onClick={props.onOrder}
        disabled={!props.purchasable}
        className={classes.OrderButton}
      >
        {props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}
      </button>
    </div>
  );
};

export default buildControls;
