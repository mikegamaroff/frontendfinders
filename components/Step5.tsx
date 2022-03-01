import React, { useContext } from "react";
import { AppContext } from "../context/StateContext";
import { ISelections } from "../pages/index";
import Item from "../components/Item";

type Step5Props = {
  action: (goto) => void;
  step: number;
  steps: Array<any>;
  selections: ISelections;
};
let tempItems = [];
const Step5: React.FC<Step5Props> = ({ action, step, steps, selections }) => {
  const { state } = useContext(AppContext);
  return (
    <div className="stepsContainer progressPadding" id="steps">
      <h2 className="blueSpans">
        <span>Step 5:</span> Select your <span>project type</span>
      </h2>
      <div className="optionSelect">
        {steps[step - 1].items.map((val, i) => {
          return (
            <div key={i * Math.random()}>
              <Item
                on={state.itemsConfig[`item${i}`]}
                /*  on={true} */
                val={{ item: val }}
                selections={selections}
                step={step}
                id={i}
                tempItems={tempItems}
              />
            </div>
          );
        })}
      </div>
      <div className="buttonContainer">
        <button
          className="btn"
          onClick={() => action(step)}
          disabled={state.buttonConfig.disabled}
        >
          <span>{state.buttonConfig.label}</span>
        </button>
      </div>
    </div>
  );
};

export default Step5;
