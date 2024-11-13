import React, { useState } from "react";
import "./css/style.css";
import logoHref from "../../images/logo.png";
import WhatsUpHref from "../../images/social/whatsup.png";
import InstHref from "../../images/social/instagram.png";
import TgHref from "../../images/social/telegramm.png";
import VkHref from "../../images/social/vk.png";
import firstOfficeHref from "../../images/SliderHouses/first.jpg";
import secondOfficeHref from "../../images/SliderHouses/second.jpg";
import thirdOfficeHref from "../../images/SliderHouses/third.jpg";
import { Slider } from "../Slider";
import { ImageSlider } from "../ImageSlider";


export function MainContent() {
    const [checkboxValue] = useState(true);

    const handlerCheckboxItem = (event: any) => {
        // return;, SetCheckboxValue
        // console.log("fiosdnfdio");
        // SetCheckboxValue(true);
    }

    return (
        <>
            <div className="common-container">
                <video autoPlay loop muted >
                    <source src="./videos/background.MP4" type="video/MP4" />
                </video>
                <div className="content-container">
                    {/* Шапка */}
                    <div className="header_container">
                        <h2>Мультибрендовая сеть турагенств</h2>
                        <h1>Tourstore.online</h1>
                        <img src={logoHref} alt="Логотип" />
                    </div>
                    {/* Блок с checkbox-сами */}
                    <div className="checkbox-container">
                        <div className="checkbox-container_item">
                            <span>Более 40 тысяч довольных туристов</span>
                            <input type="checkbox" defaultChecked={checkboxValue} onClick={handlerCheckboxItem} />
                        </div>
                        <div className="checkbox-container_item">
                            <span>Опыт в туризме более 12 лет</span>
                            <input type="checkbox" defaultChecked={checkboxValue} onChange={handlerCheckboxItem} />
                        </div>
                        <div className="checkbox-container_item">
                            <span>На связи 24/7</span>
                            <input type="checkbox" defaultChecked={checkboxValue} onChange={handlerCheckboxItem} />
                        </div>
                    </div>
                    {/* Карусель с контактами */}
                    <div className="contacts-container">
                        <a href="https://wa.me/+7930877633">
                            <img src={WhatsUpHref} alt="WhatsUp" />
                        </a>
                        <a href="#">
                            <img src={VkHref} alt="Vk" />
                        </a>
                        <a href="#">
                            <img src={TgHref} alt="Tg" />
                        </a>
                        <a href="#">
                            <img src={InstHref} alt="Inst" />
                        </a>
                    </div>
                    {/* Подвал */}
                    <div className="footer-container">
                        <h3>Нащи офисы</h3>
                        <div className="slider-container">
                            <ImageSlider items={[
                                './images/SliderHouses/first.jpg',
                                './images/SliderHouses/second.jpg',
                                './images/SliderHouses/third.jpg',
                            ]} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}