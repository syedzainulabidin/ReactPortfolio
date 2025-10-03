import React, { useState, useEffect, useRef } from "react";
import "./FluidGlass.css";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom"; // ✅ import useLocation

const FluidGlass = ({ navItems, navIcons, useIcons }) => {
  const navContent = useIcons ? navIcons : navItems;
  const navPaths = ["/", "/about", "/portfolio", "/contact"];
  const location = useLocation(); // ✅ get current route

  const navRefs = useRef([]); // store refs for all nav items

  const [indicatorLength, setIndicatorLength] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [hovering, setHovering] = useState(false);

  // ✅ Update indicator whenever route changes
  useEffect(() => {
    const activeIndex = navPaths.indexOf(location.pathname);
    if (activeIndex !== -1 && navRefs.current[activeIndex]) {
      const el = navRefs.current[activeIndex];
      setTimeout(() => {
        setIndicatorLength(el.clientWidth - 20);
        setIndicatorPosition(el.offsetLeft + 10);
      }, 200);
    }
  }, [location.pathname, useIcons]);

  return (
    <div className="nav">
      {navContent.map((item, index) => (
        <Link
          to={navPaths[index]}
          key={index}
          ref={(el) => (navRefs.current[index] = el)}
          onMouseEnter={(e) => {
            setHovering(true);
            setIndicatorLength(e.target.closest("a").clientWidth - 20);
            setIndicatorPosition(e.target.closest("a").offsetLeft + 10);
          }}
          onMouseLeave={() => {
            setHovering(false);
            // go back to active link when mouse leaves
            const activeIndex = navPaths.indexOf(location.pathname);
            if (activeIndex !== -1 && navRefs.current[activeIndex]) {
              const el = navRefs.current[activeIndex];
              setIndicatorLength(el.clientWidth - 20);
              setIndicatorPosition(el.offsetLeft + 10);
            }
          }}
        >
          {item}
        </Link>
      ))}

      <motion.span
        className="nav-indicator"
        animate={{
          width: `${indicatorLength}px`,
          left: `${indicatorPosition}px`,
          background: hovering ? "#ffffff20" : "#ffffff13",
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
