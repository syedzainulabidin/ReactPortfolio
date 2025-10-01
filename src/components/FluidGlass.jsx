import React, { useState, useEffect } from "react";
import FluidGlasses from "../raw/FluidGlass";
import { TiHome } from "react-icons/ti";

const FluidGlass = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 350);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 460);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <FluidGlasses
        navItems={["home", "about", "portfolio", "contact"]}
        navIcons={[<TiHome />, "B", "P", "C"]}
        useIcons={isSmallScreen}
      />
    </div>
  );
};

export default FluidGlass;
