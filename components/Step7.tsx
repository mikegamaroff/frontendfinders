import React, { useContext } from "react";
import { AppContext, DispatchContext } from "../context/StateContext";
import { ISelections } from "../pages/index";
type Step7Props = {
  action: (goto) => void;
  step: number;
  steps: Array<any>;
  selections: ISelections;
};

const Step7: React.FC<Step7Props> = ({ action, step, steps, selections }) => {
  const { state } = useContext(AppContext);
  const { dispatch } = useContext(DispatchContext);
  const handleChange = (e) => {
    selections.description = e.target.value;

    if (e.target.value.length < 5) {
      dispatch({
        type: "buttonset",
        payload: {
          ...state.buttonConfig,
          disabled: true,
        },
      });
    } else {
      dispatch({
        type: "buttonset",
        payload: {
          ...state.buttonConfig,
          disabled: false,
        },
      });
    }
  };

  return (
    <div className="stepsContainer progressPadding" id="steps">
      <h2 className="blueSpans">
        <span>Step 7:</span> Describe your project
      </h2>
      <div className="descriptionInputContainer">
        <textarea
          className="box box1"
          name="textValue"
          onChange={handleChange}
        />
      </div>
      <div className="buttonContainer">
        <button
          className="btn"
          onClick={() => action(step)}
          disabled={state.buttonConfig.disabled}
        >
          <span>Find now</span>
        </button>
      </div>
    </div>
  );
};

export default Step7;
