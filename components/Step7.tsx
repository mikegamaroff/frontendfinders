import React from "react";

import Item from "../components/Item";
type Step7Props = {
  action: (goto) => void;
  step: number;
  steps: Array<any>;
  selections: object;
};

const Step7: React.FC<Step7Props> = ({ action, step, steps, selections }) => {
  /*   useEffect(() => {
    gsap.from(document.getElementById("steps"), { x: -500 });
  }); */
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="stepsContainer progressPadding" id="steps">
      <h2 className="blueSpans">
        Step 7: <span>Briefly describe your project</span>
      </h2>
      <div className="descriptionInputContainer">
        <textarea
          className="box box1"
          name="textValue"
          onChange={handleChange}
        />
      </div>
      <div className="buttonContainer">
        <button className="btn" onClick={() => action(step)}>
          <span>Find Now</span>
        </button>
      </div>
    </div>
  );
};

export default Step7;
