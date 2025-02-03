import React from "react";

// import { hostName } from "../../data/hostName";

// Изображение слайдера (пункт)
export const CarouselItem = ({ item, width }: any) => {
  const hrefImage = `${item.image}`;//${hostName}

  return (
    <div className="carousel-item" style={{ width: width }}>
      <a className="carusel-href" href={item.href}>
        <img className="carousel-img" src={hrefImage} alt="Изображение слайдера" />
        <div className="button-slider">
          <a href="https://tourstore.online/Tours/">
          <img src="./images/icons/paper-plane-svgrepo-com.svg" alt="самолёт" />
            <span>Написать сообщение</span>
          </a>
        </div>
      </a>
    </div>
  );
};