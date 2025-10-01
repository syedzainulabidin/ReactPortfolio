import React, { useState, useEffect, useRef } from "react";
import "./FluidGlass.css";
import { motion } from "motion/react";

const FluidGlass = ({ navItems, navIcons, useIcons }) => {
  const navContent = useIcons ? navIcons : navItems;
  const firstNavRef = useRef(null);

  const [indicatorLength, setIndicatorLength] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  useEffect(() => {
    if (firstNavRef.current) {
      setIndicatorLength(firstNavRef.current.clientWidth + 20);
      setIndicatorPosition(firstNavRef.current.offsetLeft - 10);
    }
  }, [navContent, useIcons]);

  return (
    <div className="nav">
      {navContent.map((item, index) => (
        <a
          key={index}
          ref={index === 0 ? firstNavRef : null}
          onMouseEnter={(e) => {
            setIndicatorLength(e.target.clientWidth + 20);
            setIndicatorPosition(e.target.offsetLeft - 10);
          }}
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
          ease: "anticipate",
        }}
      />
    </div>
  );
};

export default FluidGlass;
