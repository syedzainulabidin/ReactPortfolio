import React from "react";
import LightRay from "./components/LightRay";
import Nav from "./components/Nav";
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
      {/* <FluidGlass /> */}
      <Nav />
      <Hero heading={"Black Bird"} />
      {/* </ClickSpark> */}
    </div>
  );
};

export default App;
