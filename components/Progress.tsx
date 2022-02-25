import React from "react";

type ProgressProps = {
  steps: Array<any>;
  step: number;
};

const Progress: React.FC<ProgressProps> = ({ steps, step }) => {
  return (
    <div className="progressContainer" id="progress">
      <div className="progressCircles">
        {steps.map((val, i) => {
          return (
            <div
              key={i * Math.random()}
              className={`progressCircle ${step > i && "progressFill"}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Progress;
