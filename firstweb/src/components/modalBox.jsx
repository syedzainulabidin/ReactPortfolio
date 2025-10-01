import React from "react";

export default function modalBox({children}) {
  return (
    <div className="w-full h-full flex items-center justify-center fixed top-0 left-0 z-50 bg-black bg-opacity-70 backdrop-blur">
      <span className="w-80 h-80 p-3 relative bg-gray-300 rounded-xl flex flex-col gap-3 place-items-center">
        {children}
        <input
          type="text"
          className="w-3/4 bg-white rounded-full p-2"
          name=""
          id=""
          placeholder="Name"
        />
        <input
          type="email"
          className="w-3/4 bg-white rounded-full p-2"
          name=""
          id=""
          placeholder="Email"
        />
        <input
          type="number"
          className="w-3/4 bg-white rounded-full p-2"
          name=""
          id=""
          placeholder="Phone"
        />
        <input
          type="text"
          className="w-3/4 h-3/4 bg-white rounded-2xl p-2"
          name=""
          id=""
          placeholder="Message"
        />
        <button className="bg-purple-900 px-4 py-1 rounded-full text-white">
          Submit
        </button>
      </span>
    </div>
  );
}
