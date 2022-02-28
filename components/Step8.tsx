import React from "react";
import { ISelections } from "../pages/index";
import Loader from "../components/Loader";

type Step8Props = {
  action: (goto) => void;
  step: number;
  steps: Array<any>;
  selections: ISelections;
};

const Step8: React.FC<Step8Props> = ({ action, step, steps, selections }) => {
  return (
    <div className="stepsContainer" id="steps">
      <div style={{ marginBottom: "20px" }}>
        <h1 className="blueSpans">
          <span>Finding your pro...</span>
        </h1>
      </div>
      <Loader props="" />
      <div className="buttonContainer"></div>
    </div>
  );
};

export default Step8;
