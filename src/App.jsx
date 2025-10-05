import React from "react";
import { Routes, Route } from "react-router-dom";

import LightRay from "./components/LightRay";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

// create other pages
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      {/* Always present */}
      <LightRay />
      <Nav />

      {/* Page-specific content */}
      <Routes>
        <Route path="/" element={<Hero heading="Black Bird" />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
