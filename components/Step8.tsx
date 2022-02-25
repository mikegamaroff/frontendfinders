import React from "react";

import Loader from "../components/Loader";
type Step8Props = {
  action: (goto) => void;
  step: number;
  steps: Array<any>;
  selections: object;
};

const Step8: React.FC<Step8Props> = ({ action, step, steps, selections }) => {
  /*   useEffect(() => {
    gsap.from(document.getElementById("steps"), { x: -500 });
  }); */
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="stepsContainer" id="steps">
      <Loader props="" />
      <div className="buttonContainer"></div>
    </div>
  );
};

export default Step8;
