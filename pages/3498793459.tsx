import React, { useContext } from "react";
import { AppContext } from "../context/StateContext";
import { ISelections } from "../pages/index";

type Step9Props = {
  action: (goto) => void;
  step: number;
  steps: Array<any>;
  selections: ISelections;
};

const Step9: React.FC<Step9Props> = ({ action, step, steps, selections }) => {
  const { state } = useContext(AppContext);

  return (
    <div className="stepsContainer" id="steps">
      Data check
    </div>
  );
};

export default Step9;
