import React, { useState, useEffect } from "react";
import Actions from "./Actions";
import Card from "./Card";

const Playground = () => {
  const [cardCount, setCardCount] = useState(1);
  const [topCardKey, setTopCardKey] = useState(1);

  useEffect(() => {
    // On initial load, fetch the saved card count
    const savedCardCount = localStorage.getItem("cardCount");
    if (savedCardCount) {
      setCardCount(Number(savedCardCount));
    }
  }, []);

  // Add a new card if we have space for it
  const addCard = () => {
    if (cardCount < 5) {
      const newCardCount = cardCount + 1;
      setCardCount(newCardCount);
      localStorage.setItem("cardCount", newCardCount);
    }
  };

  // Remove a card and reindex the remaining ones
  const removeCard = (cardIndex) => {
    // Immediately remove the card from localStorage
    localStorage.removeItem(`title-${cardIndex}`);
    localStorage.removeItem(`note-${cardIndex}`);

    // Re-render the UI with the new card count
    const newCardCount = cardCount - 1;
    setCardCount(newCardCount);
    localStorage.setItem("cardCount", newCardCount);

    // Shift the remaining cards in localStorage (start from next card)
    for (let i = cardIndex + 1; i <= cardCount; i++) {
      const nextCard = i;
      // Shift the remaining cards down one index
      localStorage.setItem(
        `title-${i - 1}`,
        localStorage.getItem(`title-${nextCard}`)
      );
      localStorage.setItem(
        `note-${i - 1}`,
        localStorage.getItem(`note-${nextCard}`)
      );

      // Remove the original (shifted) card from localStorage
      localStorage.removeItem(`title-${nextCard}`);
      localStorage.removeItem(`note-${nextCard}`);
    }

    console.log(cardIndex);
  };

  return (
    <div className="playground z-0 w-full h-screen fixed top-0 left-0">
      <Actions addCard={addCard} />
      <div className="cards-container">
        {Array.from({ length: cardCount }).map((_, index) => {
          const title = localStorage.getItem(`title-${index + 1}`);
          const note = localStorage.getItem(`note-${index + 1}`);

          return (
            <Card
              key={index + 1}
              k={index + 1}
              title={title}
              note={note}
              onClose={removeCard}
              isTop={topCardKey === index + 1}
              bringToFront={() => setTopCardKey(index + 1)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Playground;
