import React from "react";
import BackgroundText from "../components/BackgroundText";
import ProfileCard from "../components/ProfileCard";
import Skills from "../components/Skills";

const About = () => {
  return (
    <>
      <div className="text-blue-600 h-screen w-full pt-[100px] absolute overflow-x-hidden flex flex-col items-center">
        <BackgroundText titleFirst="About" titleSecond="Me" />
        <ProfileCard />
        <Skills rtl={true} type="frontend" />
        <Skills rtl={false} type="backend" />
      </div>
    </>
  );
};

export default About;
