import React, { useState, useContext } from "react";
import { ISelections } from "../pages/index";
import { AppContext, DispatchContext } from "../context/StateContext";
import { ItemsConfigTemplate } from "../data/data";
type ItemProps = {
  val: { item: string };
  selections: ISelections;
  step: number;
  on: boolean;
  id: number;
  tempItems: string[];
};

const Item: React.FC<ItemProps> = ({
  val,
  selections,
  step,
  on,
  id,
  tempItems,
}) => {
  const { dispatch } = useContext(DispatchContext);
  const { state } = useContext(AppContext);
  let count = 0;

  const updateRecord = () => {
    console.log(selections);
    if (!on) {
      tempItems.push(val.item);
      selections.steps.create[step - 1].items = tempItems.toString();
      ItemsConfigTemplate[`item${id}`] = true;
      ItemsConfigTemplate.count++;
    } else {
      ItemsConfigTemplate[`item${id}`] = false;
      ItemsConfigTemplate.count--;
      for (var i = 0; i < selections.steps.create[step - 1].items.length; i++) {
        let tempVal = selections.steps.create[step - 1].items[i];
        if (tempVal === val.item) {
          tempItems.splice(i, 1);
          selections.steps.create[step - 1].items = tempItems.toString();
        }
      }
    }
    dispatch({
      type: "itemset",
      payload: ItemsConfigTemplate,
    });

    if (ItemsConfigTemplate.count > 0) {
      dispatch({
        type: "buttonset",
        payload: {
          ...state.buttonConfig,
          disabled: false,
        },
      });
    } else {
      dispatch({
        type: "buttonset",
        payload: {
          ...state.buttonConfig,
          disabled: true,
        },
      });
    }
  };

  return (
    <div
      onClick={updateRecord}
      className={`item noSelect ${on && "itemSelected"}`}
    >
      {val.item}
    </div>
  );
};

export default Item;
