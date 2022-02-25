import React, { useState } from "react";

interface stepObj {
  section: string;
  items: string[];
}
/* interface selections  {
  creative: string[];
  frontend: string[];
  development: string[];
  personal: string[];
  project: string[];
  paymentPrefs: string[];
  description: string[];
}; */
type ItemProps = {
  val: string;
  stepObj: stepObj;
  selections: object;
};

const Item: React.FC<ItemProps> = ({ val, stepObj, selections }) => {
  const [on, selectItem] = useState(false);

  const updateRecord = () => {
    selectItem(!on);
    if (!on) {
      selections[stepObj.section].push(val);
      console.log(selections);
    } else {
      for (var i = 0; i < selections[stepObj.section].length; i++) {
        if (selections[stepObj.section][i] === val) {
          selections[stepObj.section].splice(i, 1);
        }
      }
    }
  };

  return (
    <div
      onClick={updateRecord}
      className={`item noSelect ${on && "itemSelected"}`}
    >
      {val}
    </div>
  );
};

export default Item;
