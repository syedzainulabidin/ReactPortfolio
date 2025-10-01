import React from "react";
import BtnPrimary from "./BtnPrimary";

const Footer = () => {
  return (
    <>
      <div className="footer rounded-tl-2xl rounded-tr-2xl p-4 flex flex-wrap justify-between w-full bg-green-950">
        <div>
          <h1 className="font-bold text-3xl">ReactJs</h1>
          <BtnPrimary value="Learn more" background="blue" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
