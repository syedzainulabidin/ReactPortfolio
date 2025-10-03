import React from "react";
import MagneticButton from "./MagneticButton";
import {
  BsArrowUpRightCircleFill,
  BsArrowDownCircleFill,
} from "react-icons/bs";

import { BsArrowDownSquareFill } from "react-icons/bs";
import { FaDownload, FaGithub } from "react-icons/fa";

const Hero = ({ heading }) => {
  return (
    <div className="fixed top-1/2 left-1/2 text-center transform -translate-1/2">
      <h1 className="font-black text-8xl text-white">{heading}</h1>
      <div className="flex justify-center gap-3 mt-4">
        <MagneticButton
          text={"Resume"}
          icon={<FaDownload size={20} />}
          path={"/download"}
        />
        <MagneticButton
          text={"Github"}
          icon={<FaGithub size={25} />}
          path={"https://github.com/syedzainulabidin"}
        />
      </div>
    </div>
  );
};

export default Hero;
