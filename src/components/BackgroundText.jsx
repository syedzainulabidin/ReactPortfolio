import React from "react";

const BackgroundText = ({ titleFirst, titleSecond }) => {
  return (
    <div className="about text-white w-full text-[16vw] uppercase">
      <h1 className="font-black text-center leading-none">{titleFirst}</h1>
      <h1 className="font-black text-center leading-none">{titleSecond}</h1>
    </div>
  );
};

export default BackgroundText;
