import React, { useContext } from "react";
import { AppContext } from "../context/StateContext";
import { ISelections } from "../pages/index";
import Image from "next/image";

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
      <h2 className="blueSpans">
        <span>Success! </span>
        <br className="lineBreak" />
        You found a perfect match!
      </h2>
      <div className="contractorDetailsContainer">
        <div className="contractorPhoto">
          <div className="contractorBadge">
            <Image
              src="/images/verified.svg"
              width={50}
              height={50}
              layout="responsive"
              alt="Verified"
            />
          </div>
          <Image
            src="/images/contractor_2344_mikegamaroff.jpg"
            width={172}
            height={172}
            layout="responsive"
            alt="5 Stars"
          />
        </div>
        <div className="contractorDetails">
          <h3 className="blueSpans">
            <span>Name:</span> Mike Gamaroff{" "}
          </h3>
          <h3 className="blueSpans">
            <span>Location:</span> Las Vegas, NV
          </h3>
          <div className="contractorStars">
            <h3 className="blueSpans">
              <span>Rating:</span>
            </h3>
            <div className="starContainer">
              <Image
                src="/images/stars.svg"
                width={177}
                height={24}
                layout="responsive"
                alt="5 Stars"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <button
          className="btn"
          onClick={() => action(step)}
          disabled={state.buttonConfig.disabled}
        >
          <span>{state.buttonConfig.label}</span>
        </button>
      </div>
    </div>
  );
};

export default Step9;
