import React, { useContext, useState } from "react";
import { AppContext, DispatchContext } from "../context/StateContext";
import { ISelections } from "../pages/index";
import {
  validatate,
  normalizePhone,
  formStatusFilter,
  formStatus,
} from "../utilities/validation";
type Step10Props = {
  action: (goto) => void;
  step: number;
  steps: Array<any>;
  selections: ISelections;
};

/* interface iErrors {
  touched: boolean;
  error: boolean;
  validated: boolean;
}

type ErrorProps = {
  name: iErrors;
  email: iErrors;
  phone: iErrors;
};
 */
const Step10: React.FC<Step10Props> = ({ action, step, steps, selections }) => {
  const { state } = useContext(AppContext);
  const { dispatch } = useContext(DispatchContext);
  const [newPhoneVal, formatPhoneVal] = useState("");
  /*   const [errors, setErrors] = useState<ErrorProps | any>(); */

  async function getErrors(name, value) {
    let errorObj = await validatate(name, value);

    dispatch({
      type: "errorSet",
      payload: errorObj,
    });

    dispatch({
      type: "buttonset",
      payload: {
        ...state.buttonConfig,
        disabled: !errorObj.validated,
      },
    });
  }

  const handleChange = (e) => {
    formStatusFilter(e.target.name, "touched", true);

    if (e.target.name === "phone") {
      let formattedInputVal: string = normalizePhone(e.target.value);
      formatPhoneVal(formattedInputVal);
    }
    selections[e.target.name] = e.target.value;

    getErrors(e.target.name, e.target.value);
  };

  return (
    <div className="stepsContainer" id="steps">
      <h2 className="blueSpans">
        <span>Request a callback!!</span>
      </h2>
      <div className="formOuterContainer">
        <div className="formRow">
          <div className="formRowText">Name:</div>
          <div className="formInputContainer">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className={`box2 ${
                state.errors && state.errors.name.error && "fieldError"
              }`}
            />
          </div>
        </div>
        <div className="formRow">
          <div className="formRowText">Email:</div>
          <div className="formInputContainer">
            <input
              type="text"
              name="email"
              onChange={handleChange}
              className={`box3 ${
                state.errors && state.errors.email.error && "fieldError"
              }`}
            />
          </div>
        </div>
        <div className="formRow">
          <div className="formRowText">Phone:</div>
          <div className="formInputContainer">
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              className={`box4 ${
                state.errors && state.errors.phone.error && "fieldError"
              }`}
              value={newPhoneVal}
              maxLength={14}
            />
          </div>
        </div>
        <div className="formButtonContainer">
          <button
            className="btn"
            onClick={() => action(step)}
            disabled={state.buttonConfig.disabled}
          >
            <span>{state.buttonConfig.label}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step10;
