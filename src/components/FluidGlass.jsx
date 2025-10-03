import React, { useState, useEffect } from "react";
import FluidGlasses from "../raw/FluidGlass";
import { RiHome2Fill } from "react-icons/ri";

import { MdPerson4 } from "react-icons/md";

import { MdWork, MdContacts } from "react-icons/md";

const FluidGlass = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 350);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 576);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <FluidGlasses
        navItems={["home", "about", "portfolio", "contact"]}
        navIcons={[
          <RiHome2Fill />,
          <MdPerson4 />,
          <MdWork />,
          <MdContacts />,
        ]}
        useIcons={isSmallScreen}
      />
    </div>
  );
};

export default FluidGlass;
