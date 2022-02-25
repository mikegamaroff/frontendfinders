import React from "react";

type Step10Props = {
  action: (goto) => void;
  step: number;
  steps: Array<any>;
  selections: object;
};

const Step10: React.FC<Step10Props> = ({ action, step, steps, selections }) => {
  /*   useEffect(() => {
    gsap.from(document.getElementById("steps"), { x: -500 });
  }); */
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="stepsContainer" id="steps">
      <h2 className="blueSpans">
        <span>Request a callback!!</span>
      </h2>
      Form Details
      <div className="buttonContainer">
        <button className="btn" onClick={() => action(step)}>
          <span>Submit</span>
        </button>
      </div>
    </div>
  );
};

export default Step10;
