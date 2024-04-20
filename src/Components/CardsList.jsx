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

  const handleTouchStart = (e, card) => {
    setDraggedItem(card);
  };

  const handleTouchMove = (e, card) => {
    e.preventDefault();
    const touchY = e.touches[0].clientY;
    const draggedOverItem = document.elementFromPoint(0, touchY);
    if (!draggedOverItem || draggedOverItem.className !== "card") return;
    const draggedOverItemIndex = cardList.findIndex(
      (item) => item.id === parseInt(draggedOverItem.dataset.id)
    );
    const draggedItemIndex = cardList.indexOf(draggedItem);

    if (draggedOverItemIndex === draggedItemIndex) return;

    const newCardList = Array.from(cardList);
    newCardList.splice(draggedItemIndex, 1);
    newCardList.splice(draggedOverItemIndex, 0, draggedItem);
    setCardList(newCardList);
  };

  return (
    <div className="card-list">
      {cardList.map((card, index) => (
        <div
          key={card.id}
          data-id={card.id}
          draggable="true"
          onTouchStart={(e) => handleTouchStart(e, card)}
          onTouchMove={(e) => handleTouchMove(e, card)}
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
