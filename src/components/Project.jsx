import React from "react";
import TiltedCard from "../raw/TiltedCard";

const Project = ({ title, img, link, gLink }) => {
  return (
    <TiltedCard
      imageSrc={img}
      altText={title}
      captionText={title}
      containerHeight="250px"
      containerWidth="250px"
      imageHeight="250px"
      imageWidth="250px"
      rotateAmplitude={20}
      scaleOnHover={1.1}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <span class="flex items-end justify-end w-[250px] h-[250px] p-2 text-white rounded-[12px]">
          <a
            href={link}
            target="_blank"
            className="bg-black p-2 m-1 rounded-xl"
          >
            Visit {title}
          </a>
          <a
            href={gLink}
            target="_blank"
            className="bg-black p-2 m-1 rounded-xl"
          >
            Github
          </a>
        </span>
      }
    />
  );
};

export default Project;
