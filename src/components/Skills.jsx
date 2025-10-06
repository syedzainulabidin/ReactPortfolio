import React from "react";
import SkillsSlider from "../raw/Skills";

const Skills = ({ rtl }) => {
  const skillImages = [
    // Design Tools
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", // Figma
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", // Adobe Photoshop

    // Languages & Frameworks
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", // JS
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", // TS
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", // PHP
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", // Laravel
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", // ReactJS
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", // Angular
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", // Node
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", // Python
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", //C Sharp
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg", // Dot Net Core

    // Styling Frameworks
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", // Bootstrap
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", // Tailwind
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", // CSS
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", // HTML

    // Tools & Platforms
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", // Git
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", // GitHub
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", // WordPress
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", // MySQL
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", // SQL
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg", // JSON
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/composer/composer-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg", // XML

    // Motion / Animation
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg", // Motion / AE
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", // ReactBits placeholder
  ];
  return <SkillsSlider images={skillImages} direction={rtl} />;
};

export default Skills;
