import React from "react";
import Image from "next/image";
const Step11: React.FC = () => {
  /*   useEffect(() => {
    gsap.from(document.getElementById("steps"), { x: -500 });
  }); */

  return (
    <div className="stepsContainer" id="steps">
      <h2 className="blueSpans">
        <span>Thank you!</span> <p>Expect a call from Mike very shortly.</p>
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
      </div>
    </div>
  );
};

export default Step11;
