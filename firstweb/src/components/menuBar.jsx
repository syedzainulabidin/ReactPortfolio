import React, { useState } from "react";

export default function MenuBar({ children }) {
  let [menuStatus, setMenuStatus] = useState(false);

  return (
    <div className="w-full h-14 relative bg-purple-700">
      <span
        className={`absolute bg-yellow-400 transition-all z-10 rounded-r-2xl ${
          menuStatus ? "left-0" : "-left-full"
        }`}
      >
        <ul className="p-4 flex flex-col gap-4">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>CATEGORIES</li>
          <li>{children}</li>
        </ul>
      </span>
      <button
        className="absolute right-0 m-2 text-[26px]"
        onClick={() => {
          setMenuStatus(!menuStatus);
        }}
      >
        {menuStatus ? <span>&#9747;</span> : <span>&#9776;</span>}
      </button>
    </div>
  );
}
