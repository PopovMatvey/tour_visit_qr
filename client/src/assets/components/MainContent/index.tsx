import React, { useState } from "react";
import logoHref from "../../images/logo.png";
import YouTubeHref from "../../images/social/youtube.png";
import InstHref from "../../images/social/instagram.png";
import TgHref from "../../images/social/telegramm.png";
import VkHref from "../../images/social/vk.png";
import { ImageSlider } from "../ImageSlider";
import "./css/style.css";


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
                        <h2>Мультибрендовая сеть турагентств</h2>
                        <h1>
                            <a href="https://tourstore.online/">Tourstore.online</a>
                        </h1>
                        <a href="https://tourstore.online/"><img src={logoHref} alt="Логотип" /></a>
                        
                    </div>
                    {/* Блок с checkbox-сами */}
                    <div className="checkbox-container">
                        <div className="checkbox-container_item">
                            <span>Более 40 тысяч довольных туристов</span>
                            <input type="checkbox" defaultChecked={checkboxValue} onChange={handlerCheckboxItem} />
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
                    {/* Кнопки*/}
                    <div className="buttons-container flex">
                        <a href="tel:88002220633">Позвонить бесплатно</a>
                        <a href="https://wa.me/+79308770633">Написать What's up</a>
                    </div>
                    {/* Карусель с контактами */}
                    <div className="contacts-container">
                        <a href="https://www.youtube.com/@Tourstore.online">
                            <img src={YouTubeHref} alt="Youtube" />
                        </a>
                        <a href="https://vk.com/tourstore.online">
                            <img src={VkHref} alt="Vk" />
                        </a>
                        <a href="https://t.me/TourStore_online">
                            <img src={TgHref} alt="Tg" />
                        </a>
                        <a href="https://www.instagram.com/tourstore.online">
                            <img src={InstHref} alt="Inst" />
                        </a>
                    </div>
                    {/* Кнопки*/}
                    <div className="find-tours-container flex">
                        <a href="https://tourstore.online/Tours/">Найти тур</a>
                        <a href="https://tourstore.online/Tours/">Подписаться на рассылку</a>
                    </div>
                    {/* Подвал */}
                    <div className="footer-container">
                        <h3>Наши офисы</h3>
                        <div className="slider-container">
                            <ImageSlider items={[
                                {
                                    image: './images/SliderHouses/first.jpg',
                                    href: 'https://tourstore.online/contacts/murom/anex/',
                                }
                                , {
                                    image: './images/SliderHouses/second.jpg',
                                    href: "https://tourstore.online/contacts/murom/pegas/",
                                },
                                {
                                    image: './images/SliderHouses/third.jpg',
                                    href: "https://tourstore.online/contacts/kasimov/FunSun/",
                                }
                            ]} />
                        </div>
                        <div className="attributes">
                            <span>
                                ООО "Турсистемы" <br />
                                ОГРН: 1136226000151 <br />
                                РТА 0012871 в Едином федеральном реестре турагентов
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}