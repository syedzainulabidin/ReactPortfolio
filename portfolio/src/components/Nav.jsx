import React from "react";
import CircularText from "../raw-components/CircularText";
// import CircularText from './CircularText';

const Nav = () => {
  return (
    <div className="w-full h-fit relative">
      <CircularText
        text="ZAIN*PORTFOLIO*"
        onHover="goBonkers"
        spinDuration={20}
        className="custom-class"
      />
      <div className="navbar bg-white/10 backdrop-blur-sm shadow-sm shadow-amber-800 rounded h-15 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-5 justify-evenly">
        <ul className="flex h-full w-full items-center justify-between">
          <li className="m-3">Home</li>
          <li className="m-3">About</li>
          <li className="m-3">Portfolio</li>
          <li className="m-3">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
