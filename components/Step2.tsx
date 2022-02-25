import React from "react";

import Item from "../components/Item";
type Step2Props = {
  action: (goto) => void;
  step: number;
  steps: Array<any>;
  selections: object;
};

const Step2: React.FC<Step2Props> = ({ action, step, steps, selections }) => {
  /*   useEffect(() => {
    gsap.from(document.getElementById("steps"), { x: -500 });
  }); */

  return (
    <div className="stepsContainer progressPadding" id="steps">
      <h2 className="blueSpans">
        Step 2: <span>Pick the frontend services you need</span>
      </h2>
      <div className="optionSelect">
        {steps[step - 1].items.map((val, i) => {
          return (
            <div key={i * Math.random()}>
              <Item
                val={val}
                stepObj={steps[step - 1]}
                selections={selections}
              />
            </div>
          );
        })}
      </div>
      <div className="buttonContainer">
        <button className="btn" onClick={() => action(step)}>
          <span>Find Now</span>
        </button>
      </div>
    </div>
  );
};

export default Step2;
