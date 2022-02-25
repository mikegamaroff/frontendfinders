import React from "react";

type Step11Props = {
  action: (goto) => void;
  step: number;
  steps: Array<any>;
  selections: object;
};

const Step11: React.FC<Step11Props> = ({ action, step, steps, selections }) => {
  /*   useEffect(() => {
    gsap.from(document.getElementById("steps"), { x: -500 });
  }); */
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="stepsContainer" id="steps">
      <h2 className="blueSpans">
        <span>THANK YOU!</span>
      </h2>
      Mike will be in touch with you very shortly!
    </div>
  );
};

export default Step11;
