import React, { useContext } from "react";
import { AppContext } from "../context/StateContext";
import Item from "../components/Item";
import { ISelections } from "../pages/index";

type Step2Props = {
  action: (goto) => void;
  step: number;
  steps: Array<any>;
  selections: ISelections;
};

const Step2: React.FC<Step2Props> = ({ action, step, steps, selections }) => {
  const { state } = useContext(AppContext);

  return (
    <div className="stepsContainer progressPadding" id="steps">
      <h2 className="blueSpans">
        <span>Step 2:</span> Pick your <span>frontend</span> services
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

export default Step2;
