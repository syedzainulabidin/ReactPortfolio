import React, { useState } from "react";
import Card from "./Card";
import { FaPlusSquare } from "react-icons/fa";

const Foreground = () => {
  // Get the saved card count from localStorage or default to 1
  const savedCardCount = localStorage.getItem("cardCount");
  const initialCardCount = savedCardCount ? parseInt(savedCardCount, 10) : 1;

  // State to track the number of cards
  const [cardCount, setCardCount] = useState(initialCardCount);

  // Function to add a new card
  const addCard = () => {
    if (cardCount < 5) {
      const newCardCount = cardCount + 1;
      setCardCount(newCardCount);
      localStorage.setItem("cardCount", newCardCount); // Save new count to localStorage
    }
  };

  // Function to clear all card data in localStorage
  const clearLocalStorage = () => {
    localStorage.clear();
    setCardCount(1);
  };

  // Create an array with the number of cards to render
  const cards = Array.from({ length: cardCount }, (_, index) => (
    <Card key={index} cardIndex={index} />
  ));

  return (
    <div className="fixed z-[3] w-full h-screen bg-emerald-950/50">
      {cards}
      <div className="absolute top-4 right-4 flex gap-4">
        <span onClick={addCard} className="cursor-pointer">
          <FaPlusSquare />
        </span>
        <button
          onClick={clearLocalStorage}
          className="cursor-pointer bg-red-500 p-3 rounded-full hover:bg-red-700 transition-colors"
        >
          <FaPlusSquare />
        </button>
      </div>
    </div>
  );
};

export default Foreground;
