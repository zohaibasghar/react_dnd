import React, { useState } from "react";

const CardList = ({ cards }) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [cardList, setCardList] = useState(cards);

  const handleDragStart = (e, card) => {
    setDraggedItem(card);
  };

  const handleDragEnter = (e, card) => {
    e.preventDefault();
    const draggedOverItemIndex = cardList.indexOf(card);
    const draggedItemIndex = cardList.indexOf(draggedItem);

    if (draggedOverItemIndex === draggedItemIndex) return;

    const newCardList = Array.from(cardList);
    newCardList.splice(draggedItemIndex, 1);
    newCardList.splice(draggedOverItemIndex, 0, draggedItem);
    setCardList(newCardList);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <div className="card-list">
      {cardList.map((card) => (
        <div
          key={card.id}
          draggable="true"
          onDragStart={(e) => handleDragStart(e, card)}
          onDragEnter={(e) => handleDragEnter(e, card)}
          onDragEnd={handleDragEnd}
          className="card"
          style={{
            transition: "all 0.3s ease",
            opacity: draggedItem && draggedItem.id === card.id ? 0.5 : 1,
          }}
        >
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

const Card = ({ title, description }) => {
  return (
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardList;
