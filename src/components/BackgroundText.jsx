import React from "react";

const BackgroundText = ({ titleFirst, titleSecond }) => {
  return (
    <div className="about text-white w-full text-[15vw] uppercase mt-[50px]">
      <h1 className="font-black text-center leading-none">{titleFirst}</h1>
      <h1 className="font-black text-center leading-none">{titleSecond}</h1>
    </div>
  );
};

export default BackgroundText;
