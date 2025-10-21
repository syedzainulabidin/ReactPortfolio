import React from "react";
import BackgroundText from "../components/BackgroundText";
import Project from "../components/Project";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio-container w-full h-screen overflow-y-scroll overflow-x-hidden flex flex-col items-center pt-[100px]">
        <BackgroundText titleFirst="Portfolio" titleSecond={null} />
        {/* <Project /> */}
      </div>
    </>
  );
};

export default Portfolio;
