import React from "react";
import Nav from "./components/Nav";
import Background from "./components/Background";

const App = () => {
  return (
    <div className="flex w-full h-screen bg-black text-white p-2 fixed">
      {/* <h1>Hey guy , I'm back</h1> */}
      <Nav/>
      <Background />
    </div>
  );
};

export default App;
