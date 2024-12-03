import React, { useState } from "react";
import logoHref from "../../images/logo.png";
import YouTubeHref from "../../images/social/youtube.png";
import InstHref from "../../images/social/instagram.png";
import TgHref from "../../images/social/telegramm.png";
import VkHref from "../../images/social/vk.png";
import whatsappIcon from "../../images/icons/whatsapp_icon.png";
import requestCall from "../../images/icons/call_icon.png";
import lupe from "../../images/icons/lupe.png";
import phone from "../../images/icons/phone.png";
import user from "../../images/icons/user.png";
import { ImageSlider } from "../ImageSlider";
import "./css/style.css";
// import "./css/checkbox.css";
// import "./css/svg_mark.css";

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
                        {/* <h2>Мультибрендовая сеть турагентств</h2>
                        <h1>
                            <a href="https://tourstore.online/">Tourstore.online</a>
                        </h1> */}
                        <a href="https://tourstore.online/"><img src={logoHref} alt="Логотип" /></a>

                    </div>
                    {/* Блок с checkbox-сами */}
                    <div className="checkbox-container">
                        <div className="checkbox-container_item">
                            {/* <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg> */}
                            <input type="checkbox" defaultChecked={checkboxValue} disabled />
                            <li>Более 40 тысяч довольных туристов</li>
                            {/* <input type="checkbox" id="switch" className="checkbox" defaultChecked={checkboxValue} />
                            <label htmlFor="switch"></label> */}
                        </div>
                        <div className="checkbox-container_item">
                            {/* <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg> */}
                            <input type="checkbox" defaultChecked={checkboxValue} disabled />
                            <li>Опыт в туризме более 12 лет</li>
                            {/* <input type="checkbox" id="switch" className="checkbox" defaultChecked={checkboxValue} />
                            <label htmlFor="switch"></label> */}
                        </div>
                        <div className="checkbox-container_item">
                            {/* <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg> */}
                            <input type="checkbox" defaultChecked={checkboxValue} disabled />
                            <li>На связи 24/7</li>
                            {/* <input type="checkbox" id="switch" className="checkbox" defaultChecked={checkboxValue} />
                            <label htmlFor="switch"></label> */}
                        </div>
                    </div>
                    {/* Кнопки*/}
                    <div className="buttons-container flex">
                        <a href="tel:+79308770633">
                            <img src={phone} alt="" />
                            <span>Позвонить</span>
                        </a>
                    </div>
                    <div className="green-buttons">
                        <a href="https://wa.me/+79308770633">
                            <img src={whatsappIcon} alt="Иконка WhatsApp" />
                            <span>Написать в WhasApp</span>
                        </a>
                        <a href="#">
                            <img src={requestCall} alt="Иконка по запросу звонка" />
                            <span>Заказать обратный звонок</span>
                        </a>
                    </div>
                    <div className="buttons-container flex">
                        <a href="tel:88002220633">
                            <img src={user} alt="Сохранить контакт" />
                            <span>Сохранить контакт</span>
                        </a>
                    </div>
                    {/* Карусель с контактами */}
                    {/* <div className="contacts-container_text">
                    </div> */}
                    <div className="contacts-container_block">
                        <span>Всё самое выгодное и нтересное в наших сообществах</span>
                        <div className="contacts-container">
                            <a href="https://vk.com/tourstore.online">
                                <img src={VkHref} alt="Vk" />
                            </a>
                            <a href="https://www.instagram.com/tourstore.online">
                                <img src={InstHref} alt="Inst" />
                            </a>
                            <a href="https://t.me/TourStore_online">
                                <img src={TgHref} alt="Tg" />
                            </a>
                            <a href="https://www.youtube.com/@Tourstore.online">
                                <img src={YouTubeHref} alt="Youtube" />
                            </a>
                        </div>
                    </div>
                    {/* Кнопки*/}
                    <div className="buttons-container flex">
                        <a href="tel:88002220633">
                            <img src={lupe} alt="" />
                            <span>Найти тур</span>
                        </a>
                    </div>
                    {/* <div className="find-tours-container flex">
                        <a href="https://tourstore.online/Tours/">Найти тур</a>
                        <a href="https://tourstore.online/Tours/">Подписаться на рассылку</a>
                    </div> */}
                    {/* Подвал */}
                    <div className="footer-container">
                        <h3>Наши офисы</h3>
                        <span>У нас три оффлайн офиса, но мы паботаем по всей Россией</span>
                        <div className="slider-container"><ImageSlider items={[
                            {
                                image: './images/SliderHouses/funsun.png',
                                href: "https://tourstore.online/contacts/kasimov/FunSun/",
                            }
                            , {
                                image: './images/SliderHouses/pegas.png',
                                href: "https://tourstore.online/contacts/murom/pegas/",
                            },
                            {
                                image: './images/SliderHouses/anex.png',
                                href: 'https://tourstore.online/contacts/murom/anex/',
                            }
                        ]} />
                        </div>
                        <div className="dialog">
                            <img src="./images/icons/avatar.png" alt="" />
                            <div className="dialog-content">
                                <span>
                                    Привет! Меня зовут Ирина Гапич. Я основатель и руководитель мультибрендовой сети турагентств и сервиса по подбору туров TourStore. Обратившись к нам, вы сделали верный выбор. Организация отдыха – хоть и приятная, но очень кропотливая работа: она не прощает даже мельчайших просчётов. Лучше доверить её тому, кто занимается ей ежедневно и знает все "подводные камни" и тонкости.
                                </span>
                            </div>
                        </div>
                        <h3>Наши специалисты</h3>
                        {/* <span>У нас три оффлайн офиса, но мы паботаем со всей Россией</span> */}
                        <div className="slider-container">
                            <ImageSlider items={[
                                {
                                    image: './images/staff/79009666505.png',
                                    href: "https://wa.me/+79009666505",
                                }
                                , {
                                    image: './images/staff/79009666545.png',
                                    href: "https://wa.me/+79009666545",
                                },
                                {
                                    image: './images/staff/79028889818.png',
                                    href: "https://wa.me/+79028889818",
                                },
                                {
                                    image: './images/staff/79028889828.png',
                                    href: "https://wa.me/+79028889828",
                                },
                                {
                                    image: './images/staff/79107717890.png',
                                    href: "https://wa.me/+79107717890",
                                },
                                {
                                    image: './images/staff/79107717892.png',
                                    href: "https://wa.me/+79107717892",
                                },
                                {
                                    image: './images/staff/79157901990.png',
                                    href: "https://wa.me/+79157901990",
                                },
                                {
                                    image: './images/staff/79511027000.png',
                                    href: "https://wa.me/+79511027000",
                                },
                            ]} />
                        </div>
                        <div className="attributes">
                            <span>
                                ООО "Турсистемы" <br />
                                ОГРН: 1136226000151 <br />
                                Реестровый номер 0012871 <br />
                                в едином реестре турагентов
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}