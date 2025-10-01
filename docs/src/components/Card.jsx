import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SlOptions } from "react-icons/sl";
import { FaWindowClose } from "react-icons/fa";

// Function to generate random position within the screen
const getRandomPosition = () => {
  const randomX = Math.random() * (window.innerWidth - 250); // Width minus card width
  const randomY = Math.random() * (window.innerHeight - 330); // Height minus card height
  return { x: randomX, y: randomY };
};

const Card = ({ cardIndex }) => {
  // Use state to store the initial position only once
  const [position, setPosition] = useState(getRandomPosition());

  // Use state for title and description
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Effect to load stored values from localStorage on component mount
  useEffect(() => {
    const savedTitle = localStorage.getItem(`cardTitle-${cardIndex}`);
    const savedDescription = localStorage.getItem(`cardDescription-${cardIndex}`);

    if (savedTitle) setTitle(savedTitle);
    if (savedDescription) setDescription(savedDescription);
  }, [cardIndex]);

  // Effect to save values to localStorage whenever they change
  useEffect(() => {
    if (title) localStorage.setItem(`cardTitle-${cardIndex}`, title);
    if (description) localStorage.setItem(`cardDescription-${cardIndex}`, description);
  }, [title, description, cardIndex]);

  return (
    <motion.div
      drag={true}
      dragConstraints={{
        left: 10,
        top: 10,
        right: window.innerWidth - 250,
        bottom: window.innerHeight - 330,
      }}
      initial={{ opacity: 0, scale: 0.5, x: position.x, y: position.y }}
      animate={{ opacity: 1, scale: 1, x: position.x, y: position.y }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { type: "spring", stiffness: 100, damping: 10 },
        x: { type: "spring", stiffness: 100, damping: 20 },
        y: { type: "spring", stiffness: 100, damping: 20 },
      }}
      className="w-60 absolute flex flex-col gap-2 p h-80 bg-emerald-950/70 rounded-xl p-3"
    >
      <div className="relative h-3 text-emerald-700 w-full flex justify-center items-center">
        <SlOptions />
        <span className="absolute text-xl end-0">
          <FaWindowClose />
        </span>
      </div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="px-3 py-2 w-full bg-emerald-900/40 outline-0 rounded border-0 text-2xl text-white font-bold"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="px-3 py-2 outline-0 bg-emerald-900/40 rounded p-1 border-0 h-full text-white"
      ></textarea>
    </motion.div>
  );
};

export default Card;
