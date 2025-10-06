import React from "react";
import BackgroundText from "../components/BackgroundText";
import ProfileCard from "../components/ProfileCard";
import Skills from "../components/Skills";

const About = () => {
  return (
    <>
      <div className="about-container w-full absolute overflow-x-hidden flex flex-col items-center">
        <BackgroundText titleFirst="About" titleSecond="Me" />
        <ProfileCard />
        <Skills rtl={true} type="frontend" />
        <Skills rtl={false} type="backend" />
        <BackgroundText titleFirst="Experience" titleSecond={null} />
      </div>
    </>
  );
};

export default About;
