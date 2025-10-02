import React from "react";
import LightRays from "../raw/LightRay";

const LightRay = () => {
  return (
    <LightRays
      raysOrigin="top-center"
      raysColor="#a8a8ff"
      raysSpeed={1}
      lightSpread={2}
      rayLength={3}
      followMouse={true}
      mouseInfluence={0.1}
      noiseAmount={0}
      distortion={0}
      className="custom-rays"
    />
  );
};

export default LightRay;
