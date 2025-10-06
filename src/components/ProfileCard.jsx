import React from "react";
import ProfileCards from "../raw/ProfileCard";

const ProfileCard = () => {
  return (
    <ProfileCards
      name="Black Bird"
      title="Developer"
      handle="blackbird"
      status="Online"
      contactText="Contact Me"
      avatarUrl="src\assets\images\profile.jpeg"
      showUserInfo={true}
      enableTilt={true}
      enableMobileTilt={false}
      onContactClick={() => console.log("Contact clicked")}
    />
  );
};

export default ProfileCard;
