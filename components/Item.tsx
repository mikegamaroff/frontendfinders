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
};

const Item: React.FC<ItemProps> = ({ val, selections, step, on, id }) => {
  const { dispatch } = useContext(DispatchContext);
  const { state } = useContext(AppContext);
  let count = 0;
  const updateRecord = () => {
    if (!on) {
      selections.steps.create[step - 1].items.create.push(val);
      ItemsConfigTemplate[`item${id}`] = true;
      ItemsConfigTemplate.count++;
    } else {
      ItemsConfigTemplate[`item${id}`] = false;
      ItemsConfigTemplate.count--;
      for (
        var i = 0;
        i < selections.steps.create[step - 1].items.create.length;
        i++
      ) {
        let tempVal = selections.steps.create[step - 1].items.create[i].item;
        if (tempVal === val.item) {
          selections.steps.create[step - 1].items.create.splice(i, 1);
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
