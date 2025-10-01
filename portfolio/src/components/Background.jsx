import React from "react";
import LightRays from "../raw-components/LightRays";

const Background = () => {
  return (
    <div>
      <LightRays
        raysOrigin="top-center"
        raysColor="#b19cff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
    </div>
  );
};

export default Background;
