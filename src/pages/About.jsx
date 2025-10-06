import React from "react";
import BackgroundText from "../components/BackgroundText";
import ProfileCard from "../components/ProfileCard";

const About = () => {
  return (
    <>
      <BackgroundText titleFirst="About" titleSecond="Me" />
      <div className="text-blue-600 w-full absolute overflow-x-hidden h-screen flex items-center justify-center">
        <ProfileCard />
      </div>
    </>
  );
};

export default About;
