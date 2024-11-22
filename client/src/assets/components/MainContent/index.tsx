import React, { useState } from "react";
import logoHref from "../../images/logo.png";
import YouTubeHref from "../../images/social/youtube.png";
import InstHref from "../../images/social/instagram.png";
import TgHref from "../../images/social/telegramm.png";
import VkHref from "../../images/social/vk.png";
import { ImageSlider } from "../ImageSlider";
import "./css/style.css";
import "./css/checkbox.css";
import "./css/svg_mark.css";


export function MainContent() {
    const [checkboxValue] = useState(true);

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
                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>
                            <li>Более 40 тысяч довольных туристов</li>
                            {/* <input type="checkbox" id="switch" className="checkbox" defaultChecked={checkboxValue} />
                            <label htmlFor="switch"></label> */}
                        </div>
                        <div className="checkbox-container_item">
                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>
                            <li>Опыт в туризме более 12 лет</li>
                            {/* <input type="checkbox" id="switch" className="checkbox" defaultChecked={checkboxValue} />
                            <label htmlFor="switch"></label> */}
                        </div>
                        <div className="checkbox-container_item">
                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>
                            <li>На связи 24/7</li>
                            {/* <input type="checkbox" id="switch" className="checkbox" defaultChecked={checkboxValue} />
                            <label htmlFor="switch"></label> */}
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
                                    image: './images/SliderHouses/third.jpg',
                                    href: "https://tourstore.online/contacts/kasimov/FunSun/",
                                }
                                , {
                                    image: './images/SliderHouses/second.jpg',
                                    href: "https://tourstore.online/contacts/murom/pegas/",
                                },
                                {
                                    image: './images/SliderHouses/first.jpg',
                                    href: 'https://tourstore.online/contacts/murom/anex/',
                                }
                            ]} />
                        </div>
                        <div className="attributes">
                            <span>
                                ООО "Турсистемы" <br />
                                ОГРН: 1136226000151 <br />
                                Реестровый номер 0012871 в едином реестре турагентов
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}