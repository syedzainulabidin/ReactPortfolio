import React, { useState } from "react";
import "./FluidGlass.css";
import { motion } from "motion/react";

const FluidGlass = ({ navitems }) => {
  let points = [6, 27, 48, 71];
  const [indicatorLength, setindicatorLength] = useState(62);
  const [indicatorPosition, setindicatorPosition] = useState(10);
  return (
    <div className="nav">
      {navitems.map((item, index) => (
        <a
          onMouseEnter={(e) => {
            setindicatorLength(e.target.clientWidth + 20);
            setindicatorPosition(e.target.offsetLeft - 10);
          }}
          key={index}
        >
          {item}
        </a>
      ))}
      <motion.span
        className="nav-indicator"
        animate={{
          width: `${indicatorLength}px`,
          left: `${indicatorPosition}px`,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
          ease: "anticipate", // ✅ Easing function
        }}
      />
    </div>
  );
};

export default FluidGlass;
