import React from "react";
import Image from "next/image";

type Step0Props = {
  action: (goto) => void;
  step: number;
  steps: Array<any>;
};

const Step0: React.FC<Step0Props> = ({ action, step, steps }) => {
  /*   useEffect(() => {
    gsap.from(document.getElementById("steps"), { x: -500 });
  }); */

  return (
    <div className="stepsContainer" id="steps">
      <div className="flagImage">
        <Image
          src="/images/flag.svg"
          width={91}
          height={56}
          layout="responsive"
          alt="Made in the USA"
        />
      </div>
      <div className="headline">
        Find a top notch, US-based UX/UI designer, frontend engineer or{" "}
        <span className="widow">web app developer</span>
      </div>

      <div className="buttonContainer">
        <button className="btn" onClick={() => action(step)}>
          <span>Find Now</span>
        </button>
      </div>
    </div>
  );
};

export default Step0;
