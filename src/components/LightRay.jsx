import React from "react";
import LightRays from "../raw/LightRay";

const LightRay = () => {
  return (
    // <div style={{ width: "100dvw", height: "100dvh", position: "a" }}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#e5a9ff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.05}
        distortion={0.05}
        className="custom-rays"
      />
    // </div>
  );
};

export default LightRay;
