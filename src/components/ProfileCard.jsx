import React from "react";
import ProfileCards from "../raw/ProfileCard";

const ProfileCard = () => {
  return (
    <ProfileCards
      name="Zain ul Abidin"
      title="Developer"
      handle="syedzainulabidinali"
      status="Online"
      contactText="Contact Me"
      avatarUrl="src\assets\images\animatedprofile.png"
      iconUrl="src/assets/images/iconpattern.png"
      showUserInfo={true}
      enableTilt={true}
      enableMobileTilt={false}
      onContactClick={() => console.log("Contact clicked")}
    />
  );
};

export default ProfileCard;
