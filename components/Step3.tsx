import React from "react";

import Item from "../components/Item";
type Step3Props = {
  action: (goto) => void;
  step: number;
  steps: Array<any>;
  selections: object;
};

const Step3: React.FC<Step3Props> = ({ action, step, steps, selections }) => {
  /*   useEffect(() => {
    gsap.from(document.getElementById("steps"), { x: -500 });
  }); */

  return (
    <div className="stepsContainer progressPadding" id="steps">
      <h2 className="blueSpans">
        Step 3: Pick the <span>development</span> services you need
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

export default Step3;
