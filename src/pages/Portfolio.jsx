import React from "react";
import BackgroundText from "../components/BackgroundText";
import Project from "../components/Project";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio-container w-full h-screen overflow-y-scroll overflow-x-hidden flex flex-col items-center pt-[100px]">
        <BackgroundText titleFirst="Portfolio" titleSecond={null} />
        <div className="w-[calc(100%-60px)] flex justify-evenly gap-8 flex-wrap max-[650px]:flex-col">
          <Project
            title="Quick Snacks"
            img="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg"
            link="https://quick--snacks.web.app"
          />
          <Project
            title="UxPendit"
            img="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg"
            link="https://szainportfolio.web.app/projects/uxpendit/"
          />
          <Project
            title="Mowe"
            img="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg"
            link="https://szainportfolio.web.app/projects/movie/"
          />
          <Project
            title="Quick Snacks"
            img="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg"
            link="https://quick--snacks.web.app"
          />
          <Project
            title="UxPendit"
            img="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg"
            link="https://szainportfolio.web.app/projects/uxpendit/"
          />
          <Project
            title="Mowe"
            img="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg"
            link="https://szainportfolio.web.app/projects/movie/"
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
