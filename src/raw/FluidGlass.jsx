import React, { useState, useEffect, useRef } from "react";
import "./FluidGlass.css";
import { motion } from "motion/react";

const FluidGlass = ({ navItems, navIcons, useIcons }) => {
  const navContent = useIcons ? navIcons : navItems;
  const firstNavRef = useRef(null);

  const [indicatorLength, setIndicatorLength] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [indicatorFreeze, setindicatorFreeze] = useState(false);
  useEffect(() => {
    if (firstNavRef.current) {
      setTimeout(() => {
        setIndicatorLength(firstNavRef.current.clientWidth + 20);
        setIndicatorPosition(firstNavRef.current.offsetLeft - 10);
      }, 100);
    }
  }, [navContent, useIcons]);

  return (
    <div className="nav">
      {navContent.map((item, index) => (
        <a
          key={index}
          ref={index === 0 ? firstNavRef : null}
          onMouseEnter={(e) => {
            setIndicatorLength(e.target.closest("a").clientWidth + 20);
            setIndicatorPosition(e.target.closest("a").offsetLeft - 10);
            setindicatorFreeze(true);
          }}
          onMouseLeave={() => {
            setindicatorFreeze(false);
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
          background: `${indicatorFreeze ? "#ffffff20" : "#ffffff13"}`,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          ease: "anticipate",
        }}
      />
    </div>
  );
};

export default FluidGlass;
