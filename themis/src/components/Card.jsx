import React, { useEffect, useState } from "react";
import { SlOptions } from "react-icons/sl";
import { FaWindowClose } from "react-icons/fa";
import { motion } from "motion/react";
import storage from "./Storage";

const Card = (props) => {
  const [cardHover, setCardHover] = useState(false);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [cardTitle, setCardTitle] = useState(props.title || "");
  const [cardNote, setCardNote] = useState(props.note || "");

  useEffect(() => {
    const initialX = Math.round(Math.random() * (window.innerWidth - 210));
    const initialY = Math.round(Math.random() * (window.innerHeight - 290));
    setCardPosition({ x: initialX, y: initialY });
  }, []);

  // Sync cardTitle and cardNote with localStorage directly
  useEffect(() => {
    // If cardTitle or cardNote changes, update the localStorage
    if (cardTitle !== props.title || cardNote !== props.note) {
      localStorage.setItem(`title-${props.k}`, cardTitle);
      localStorage.setItem(`note-${props.k}`, cardNote);
    }
  }, [cardTitle, cardNote, props.k]);

  const handleTitleChange = (e) => {
    setCardTitle(e.target.value);
  };

  const handleNoteChange = (e) => {
    setCardNote(e.target.value);
  };

  return (
    <motion.div
      onPointerDown={props.bringToFront}
      initial={{
        filter: "blur(20px)",
        scale: 0,
        opacity: 0,
        x: cardPosition.x,
        y: cardPosition.y,
        filter: props.isTop
          ? "blur(0px)"
          : ["blur(0px)", "blur(5px)", "blur(0px)"],
      }}
      animate={{
        filter: "blur(0px)",
        scale: 1,
        opacity: 1,
        x: cardPosition.x,
        y: cardPosition.y,
      }}
      transition={{
        duration: 0.5,
      }}
      drag
      dragConstraints={{
        top: 10,
        left: 10,
        right: window.innerWidth - 210,
        bottom: window.innerHeight - 290,
      }}
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
      className={`absolute ${
        props.isTop ? "z-[50]" : "z-[10]"
      } card w-50 h-70 flex flex-col gap-2 bg-emerald-900/80 p-2 rounded`}
      data-card={props.k}
    >
      <div className="relative flex items-center justify-center text-emerald-700">
        <SlOptions
          className={`transition-opacity duration-300 ${
            cardHover ? "opacity-100" : "opacity-0"
          }`}
        />
        <span className="absolute end-0">
          <FaWindowClose onClick={() => props.onClose(props.k)} />
        </span>
      </div>

      <input
        type="text"
        value={cardTitle}
        onChange={handleTitleChange}
        className="bg-emerald-800/50 w-full text-white font-bold outline-0 border-0 rounded p-2"
      />
      <textarea
        value={cardNote}
        onChange={handleNoteChange}
        className="w-full h-full bg-emerald-800/50 text-white rounded outline-0 border-0 p-2"
      />
    </motion.div>
  );
};

export default Card;
