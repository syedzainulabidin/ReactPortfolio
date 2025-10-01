import React from "react";
import LightRays from "../raw/LightRay";

const LightRay = () => {
  return (
    <div style={{ width: "100dvw", height: "100dvh", position: "relative" }}>
      <LightRays
        raysOrigin="top-center"
        raysColor="white"
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

export default LightRay;
