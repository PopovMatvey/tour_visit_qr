import React from "react";
// import { hostName } from "../../data/hostName";

// Изображение слайдера (пункт)
export const CarouselItem = ({ item, width }: any) => {
  const hrefImage = `${item.image}`;//${hostName}

  return (
    <div className="carousel-item" style={{ width: width }}>
      {/* <div className="carousel-item_block"> */}
        {/* <div className="carousel-item_image"> */}
          <a className="carusel-href" href={item.href} target="_blank">
            <img className="carousel-img" src={hrefImage} alt="Изображение слайдера" />
          </a>
        {/* </div> */}
        <div className="carousel-item_review">
          <iframe src={item.hrefIframe} width="150" height="50" frameBorder="0"></iframe>
        </div>
      {/* </div> */}
    </div>
  );
};