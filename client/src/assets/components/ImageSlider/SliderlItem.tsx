import React from "react";
// import { hostName } from "../../data/hostName";

// Изображение слайдера (пункт)
export const CarouselItem = ({ item, width }: any) => {
  const hrefImage = `${item.image}`;//${hostName}

  return (
    <div className="carousel-item" style={{ width: width }}>
      <a className="carusel-href" href={item.href}>
        <img className="carousel-img" src={hrefImage} alt="Изображение слайдера" />
      </a>
    </div>
  );
};