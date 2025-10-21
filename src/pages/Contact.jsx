import React from "react";
import BackgroundText from "../components/BackgroundText";

const Contact = () => {
  return (
    <>
      <div className="portfolio-container w-full h-screen overflow-y-scroll overflow-x-hidden flex flex-col items-center pt-[100px]">
        <BackgroundText titleFirst="Contact" titleSecond={null} />
      </div>
    </>
  );
};

export default Contact;
