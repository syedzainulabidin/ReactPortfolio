import React from "react";
import MagneticButtons from "../raw/MagneticButton";
import "../raw/MagneticButton.css";
import { linearGradient } from "motion/react-client";

const MagneticButton = ({ text, icon, path, bg = "transparent" }) => {
  return (
    <MagneticButtons distance={0.3}>
      <a href={path}>
        <button
          style={{
            background: `linear-gradient(to bottom, ${bg}, transparent)`,
          }}
          className="magnetic-button h-12 text-white font-bold flex items-center justify-evenly p-4"
        >
          {text} {icon}
        </button>
      </a>
    </MagneticButtons>
  );
};

export default MagneticButton;
