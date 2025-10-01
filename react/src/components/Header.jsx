import React from "react";
import BtnPrimary from "./BtnPrimary";
import { Link, Links } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="flex w-full justify-between items-center p-4 bg-green-950 rounded-bl-2xl rounded-br-2xl">
        <div className="brand">
          <h1 className="font-bold text-3xl">ReactJs</h1>
        </div>
        <div className="links">
          <ul className="flex gap-3 items-center">
            <li className="hover:underline">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:underline">
              <Link to={"about"}>About</Link>
            </li>
            <li className="hover:underline">
              <Link to={"contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"services"}>
                <BtnPrimary value="Services" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
