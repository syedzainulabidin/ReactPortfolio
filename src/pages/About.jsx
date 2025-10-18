import React from "react";
import BackgroundText from "../components/BackgroundText";
import ProfileCard from "../components/ProfileCard";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

const About = () => {
  return (
    <>
      <div className="about-container w-full h-screen overflow-y-scroll overflow-x-hidden flex flex-col items-center pt-[100px]">
        <BackgroundText titleFirst="About me" titleSecond={null} />
        <ProfileCard />
        <Skills rtl={true} type="frontend" />
        <Skills rtl={false} type="backend" />
        <BackgroundText titleFirst="Experience" titleSecond={null} />
        <div className="w-[calc(100%-40px)] flex justify-between gap-4 flex-wrap max-[900px]:flex-col">
          <Experience
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9vyoJ-MhCaT7GsDmlwki8kE-7ZuW91nddw&s"
            title="Logic Unit"
            about="abcd efgh ijkl mno"
            roles={["Laravel Developer", "Wordpress Designer", "UI/UX Designer"]}
            start="2025"
            end="Present"
          />
          <Experience
            img="https://media.licdn.com/dms/image/v2/C4D0BAQHiumEIwPMRZA/company-logo_200_200/company-logo_200_200/0/1630577069525/kmh_industrial_automation_services_logo?e=2147483647&v=beta&t=uLvVlqZljidRGRNh9LGtI38Ktxx_-eEp-tEijQN2C9k"
            title="KMH Automations"
            about="abcd efgh ijkl mno"
            roles={["Graphic Designer", "Frontend Designer"]}
            start="2023"
            end="2024"
          />
          <Experience
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2T-Z5u4EDZddKjVmPwpb4pRSgQ2Rp2FwjA&s"
            title="Sindh Govt Hospital K5"
            about="abcd efgh ijkl mno"
            roles={["Volunteer", "Card Automation", "Php Developer"]}
            start="2023"
            end="2024"
          />
        </div>
        <span className="mb-100"></span>
      </div>
    </>
  );
};

export default About;
