import React from "react";
// import { hostName } from "../../data/hostName";

// Изображение слайдера (пункт)
export const CarouselItem = ({ item, width }: any) => {
  const hrefImage = `${item}`;//${hostName}

  return (
    <div className="carousel-item" style={{ width: width }}>
      <img className="carousel-img" src={hrefImage} alt="Изображение слайдера"/>
    </div>
  );
};