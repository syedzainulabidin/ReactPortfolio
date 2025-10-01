import React from "react";

const Hero = ({ heading }) => {
  return (
    <h1 className="fixed top-1/2 left-1/2 text-center transform -translate-1/2 font-black text-6xl z-10 text-light">
      {heading}
    </h1>
  );
};

export default Hero;
