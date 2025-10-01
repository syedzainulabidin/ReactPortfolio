import React from "react";
import MagneticButton from "./MagneticButton";
import { ImDownload } from "react-icons/im";
import { MdOutlineArrowOutward } from "react-icons/md";

const Hero = ({ heading }) => {
  return (
    <div className="fixed top-1/2 left-1/2 text-center transform -translate-1/2">
      <h1 className="font-black text-8xl z-10 text-light">{heading}</h1>
      <div className="flex justify-center gap-3 mt-4">
        <MagneticButton
          text={"Resume"}
          icon={<ImDownload />}
          path={"/download"}
        />
        <MagneticButton
          text={"Github"}
          icon={<MdOutlineArrowOutward />}
          path={"https://github.com/syedzainulabidin"}
        />
      </div>
    </div>
  );
};

export default Hero;
