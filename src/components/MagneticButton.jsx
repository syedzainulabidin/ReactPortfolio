import React from "react";
import MagneticButtons from "../raw/MagneticButton";

const MagneticButton = ({ text, icon, path }) => {
  return (
    <MagneticButtons distance={0.3}>
      <a href={path}>
        <button className="bg-neutral-50/20 w-30 h-12 rounded-xl text-white font-bold flex items-center justify-evenly">
          {text} {icon}
        </button>
      </a>
    </MagneticButtons>
  );
};

export default MagneticButton;
