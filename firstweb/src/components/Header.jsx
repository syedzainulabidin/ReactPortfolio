import React from "react";

export default function Header({data, children}) {
  return (
    <div className="navbar">
      <span className="brand">
        <h1 className="text-cyan-400 font-bold">{data.brand}</h1>
      </span>
      <ul className="links">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">SERVICES</a>
        </li>
        <li>
          <a href="#">CONTACT AT {data.contact}</a>
        </li>
      </ul>
      {children}
    </div>
  );
}
