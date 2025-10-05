import React from "react";

const BackgroundText = ({ titleFirst, titleSecond }) => {
  return (
    <div className="about text-white w-full text-[15vw] uppercase">
      <h1 className="font-black text-center">{titleFirst}</h1>
      <h1 className="font-black text-center leading-0">{titleSecond}</h1>
    </div>
  );
};

export default BackgroundText;
