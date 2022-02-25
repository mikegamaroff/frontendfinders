import React from "react";

type Step9Props = {
  action: (goto) => void;
  step: number;
  steps: Array<any>;
  selections: object;
};

const Step9: React.FC<Step9Props> = ({ action, step, steps, selections }) => {
  /*   useEffect(() => {
    gsap.from(document.getElementById("steps"), { x: -500 });
  }); */
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="stepsContainer" id="steps">
      <h2 className="blueSpans">
        <span>Success!</span> You found a perfect match!
      </h2>
      Mike Details
      <div className="buttonContainer">
        <button className="btn" onClick={() => action(step)}>
          <span>REQUEST CALL BACK</span>
        </button>
      </div>
    </div>
  );
};

export default Step9;
