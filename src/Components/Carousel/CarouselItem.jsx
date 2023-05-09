import React from "react";

function CarouselItem({ item }) {
  return (
    <>
      <div className="bottom-icon">{item.icon}</div>
      <div className="bottom-text">
        <p className="quote-text">{item.text}</p>
        <div className="bottom-text-low">
          <div className="text-underline"></div>
          <p className="text-secondary">{item.name}</p>
        </div>
      </div>
    </>
  );
}

export default CarouselItem;
