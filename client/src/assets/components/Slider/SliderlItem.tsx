import React from "react";
import "./css/item.css";

export const CarouselItem = ({ item, width }: any) => {
  return (
    <img src={item.icon} alt="" />
    // <div className="carousel-item" style={{ width: width }}>
    //   <img className="carousel-img" src={item.icon} alt="Изображение слайдера"/>
    //   <div className="carousel-item-text">{item.description}</div>
    // </div>
  );
};