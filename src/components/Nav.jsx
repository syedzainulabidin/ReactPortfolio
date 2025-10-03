import React from "react";
import CircularText from "../raw/CircularText";
import FluidGlass from "./FluidGlass";
const Nav = () => {
  return (
    <div>
      <CircularText
        text="ZAIN*PORTFOLIO*"
        onHover="goBonkers"
        spinDuration={20}
        className="custom-class"
      />
      <FluidGlass />
    </div>
  );
};

export default Nav;
