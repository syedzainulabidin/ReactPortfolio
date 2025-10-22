import React from "react";
import TiltedCard from "../raw/TiltedCard";

const Project = ({ title, img, link }) => {
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
        <p class="m-2 p-2 bg-black text-white rounded-[12px]">
          <a href={link} target="_blank">
            Visit {title}
          </a>
        </p>
      }
    />
  );
};

export default Project;
