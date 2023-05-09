import React from "react";

function CarouselPhotoItem({ item }) {
  return (
    <>
      <div className="bottom-img">
        <img src={item.img} alt="work-img" />
      </div>
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

export default CarouselPhotoItem;
