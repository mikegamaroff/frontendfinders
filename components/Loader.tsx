import React from "react";

import Item from "../components/Item";
type LoaderProps = {
  props: "";
};

const Loader: React.FC<LoaderProps> = ({ props }) => {
  /*   useEffect(() => {
    gsap.from(document.getElementById("steps"), { x: -500 });
  }); */

  return (
    <div className="progress">
      <div className="progress-value"></div>
    </div>
  );
};

export default Loader;
