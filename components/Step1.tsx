import React, { useContext } from "react";
import { AppContext, DispatchContext } from "../context/StateContext";
import Item from "../components/Item";
import { ISelections } from "../pages/index";

type Step1Props = {
  action: (goto) => void;
  step: number;
  steps: Array<any>;
  selections: ISelections;
  buttonConfig: any;
};

const Step1: React.FC<Step1Props> = ({ action, step, steps, selections }) => {
  const { state } = useContext(AppContext);

  return (
    <div className="stepsContainer progressPadding" id="steps">
      <h2 className="blueSpans">
        <span>Step 1:</span> Pick your <span>creative</span> services
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

export default Step1;
