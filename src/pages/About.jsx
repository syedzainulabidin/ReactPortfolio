import React from "react";
import BackgroundText from "../components/BackgroundText";
import ProfileCard from "../components/ProfileCard";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import { FaLaravel } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { DiIllustrator } from "react-icons/di";

import { FaBootstrap } from "react-icons/fa6";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { FaPhp } from "react-icons/fa";

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
            about="Contributing to web and mobile projects through UI/UX design in Figma and Photoshop, while also supporting frontend development and CMS integration."
            roles={[
              "Laravel Developer",
              "Wordpress Designer",
              "UI/UX Designer",
            ]}
            icons={[<FaLaravel />, <FaWordpress />, <FaFigma />]}
            start="2025"
            end="Present"
          />
          <Experience
            img="https://img.freepik.com/premium-photo/vibrant-minimalistic-icon-unleashing-graphic-design-prowess-with-pencil_1000124-238173.jpg?semt=ais_hybrid&w=740&q=80"
            title="Freelancing"
            about="Providing custom graphic design services for restaurants, badge makers, and creative artists, including branding and promotional visuals tailored to each client’s unique style."
            roles={["Photoshop", "Illustrator"]}
            icons={[<DiPhotoshop />, <DiIllustrator />]}
            start="2024"
            end="Present"
          />
          <Experience
            img="https://media.licdn.com/dms/image/v2/C4D0BAQHiumEIwPMRZA/company-logo_200_200/company-logo_200_200/0/1630577069525/kmh_industrial_automation_services_logo?e=2147483647&v=beta&t=uLvVlqZljidRGRNh9LGtI38Ktxx_-eEp-tEijQN2C9k"
            title="KMH Automations"
            about="Designed graphics and frontend layouts for industrial automation projects, using Photoshop and Bootstrap to create clean, responsive interfaces."
            roles={["Graphic Designer", "Frontend Designer"]}
            icons={[<DiPhotoshop />, <FaBootstrap />]}
            start="2023"
            end="2024"
          />
          <Experience
            img="https://images.seeklogo.com/logo-png/17/3/government-of-sindh-pakistan-logo-png_seeklogo-174181.png"
            title="Sindh Govt Hospital K5"
            about="Volunteered to develop a card automation system for the hospital, using PHP and Bootstrap to streamline Doctors and other Paramedical staff data and improve workflow efficiency."
            roles={["Volunteer", "Card Automation", "Php Developer"]}
            icons={[<MdOutlineVolunteerActivism />, <FaBootstrap />, <FaPhp />]}
            start="2021"
            end="Present"
          />
        </div>
        <span className="mb-30"></span>
      </div>
    </>
  );
};

export default About;
