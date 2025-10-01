import React from "react";
import LightRay from "./components/LightRay";
import FluidGlass from "./components/FluidGlass";
import Hero from "./components/Hero";
import ClickSpark from "./raw/ClickSpark";

const App = () => {
  return (
    <div>
      {/* <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      > */}
        <LightRay />
        <FluidGlass />
        <Hero heading={"Qwerty Xyz"} />
      {/* </ClickSpark> */}
    </div>
  );
};

export default App;
