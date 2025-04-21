import React, { useEffect, useState } from "react";
import { useActiveIndexState } from "./hook/useActiveIndexState";
import { CarouselItem as SliderlItem } from "./SliderlItem";
import arrorBack from "./images/arrow-back.png";
import arrorNext from "./images/arrow-next.png";
import "./css/style.css";
import "./css/mobile.css"

// Слайдер изображений
export const ImageSliderButton = ({ items }: any) => {
  const { activeIndex, setActiveIndex } = useActiveIndexState();
  const [widthScreen, setWidthScreen] = useState(0);

  // Обновить индекс
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    setWidthScreen(window.screen.width);
  }, [widthScreen])

  if (widthScreen > 990) {
    return (
      <div className="carousel">
        {/* Содержимое слайдера */}
        <div
          className="inner"
          style={{
            transform: `translate(-${activeIndex * 100}%)`
          }}
        >
          {items.map((item: any, i: any) => {
            return <SliderlItem key={i++} item={item} width={"100%"} />;
          })}
        </div>
        <div className="carousel-buttons">
          {/* Кнопка назад */}
          <div className="button-arrow_container">
            <button
              className="button-arrow"
              onClick={() => {
                updateIndex(activeIndex - 1);
              }}
            >
              <img src={arrorBack} alt="" />
            </button>
            {/* Конпка назад */}
            <button
              className="button-arrow"
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
            >
              <img src={arrorNext} alt="" />
            </button>
          </div>
          {/* Буллиты */}
          <div className="indicators">
            {items.map((_item: any, index: any) => {
              return (
                <button
                  key={index}
                  className="indicator-buttons"
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  <div
                    key={index}
                    className={`material-symbols-outlined 
                  ${index === activeIndex
                        ? "indicator-symbol-active"
                        : "indicator-symbol"
                      }`}
                  >
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );

  } else {
    return (
      <>
        <div className="slider">
          {items.map((item: any, i: any) => {
            return <>
              <div className="slider_item carousel-item">
                <a className="carusel-href" href={item.href} target="_blank">
                  <img className="carousel-img" src={item.image} alt="Изображение слайдера" />
                  <div className="button-slider">
                    <a href={item.href} target="_blank">
                      <img src="./images/icons/whtapp_icon.png" alt="самолёт" />
                      <span>Написать </span>
                    </a>
                  </div>
                  {/* <div className="item_review">
                    <iframe src={item.hrefIframe} width="150" height="50" frameBorder="0"></iframe>
                  </div> */}
                </a>
              </div>
            </>
              ;
          })}
        </div>
      </>
    );
  }
};