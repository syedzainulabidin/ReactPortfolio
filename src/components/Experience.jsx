import React from "react";
import MagneticButton from "./MagneticButton";

const Experience = ({ title, img, roles, start, end, about }) => {
  return (
    <div className="w-[calc(50%-10px)] flex gap-6 items-center bg-[rgba(255,255,255,0.001)] shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.308),0px_0px_5px_5px_rgba(0,0,0,0.308)] rounded-[7px] backdrop-blur-[30px] p-10 max-[900px]:w-full">
      <div className="img">
        <img className="w-40 aspect-square rounded-full" src={img} alt="" />
      </div>
      <div className="comp">
        <h1 className="text-white font-bold text-4xl">{title}</h1>
        <p className="text-white">{about}</p>

        <span className="flex flex-wrap gap-2">
          {roles.map((role, index) => (
            <MagneticButton key={index} text={role} icon={null} path={null} />
          ))}
          <MagneticButton bg="#5f5fff" text={`${start} - ${end}`} icon={null} path={null} />
        </span>
      </div>
    </div>
  );
};

export default Experience;
