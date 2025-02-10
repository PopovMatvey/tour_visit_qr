import React, { useState } from "react";
import logoHref from "../../images/logo.png";
import YouTubeHref from "../../images/social/youtube.png";
import InstHref from "../../images/social/instagram.png";
import TgHref from "../../images/social/telegramm.png";
import VkHref from "../../images/social/vk.png";
import whatsappIcon from "../../images/icons/icons_whatsapp.png";
import requestCall from "../../images/icons/icons_helper.png";
import vkIcon from "../../images/icons/icons_vk.png";
import tgIcon from "../../images/icons/icons_telegram.png";
import lupe from "../../images/icons/lupe.png";
import phone from "../../images/icons/phone.png";
import user from "../../images/icons/user.png";
import chackboxToggleBar from "../../images/icons/btns/checkbox-bar.png"
import notification from "./image/notification.png";
import { ImageSlider } from "../ImageSlider";
import { ImageSliderButton } from "../ImageSliderButton";
import { ImageSliderOffice } from "../ImageSliderOffice";
import toggle from "./image/toggle_clear.svg"
import { toggleClearSVG } from "../../data/toggleButtonSVG";
import "./css/style.css";
// import Slider from "../MobileSlider";
// import SimpleSlider from "../MobileSlider";

// import { Contacts } from 'react-native-contacts';

// import "./css/checkbox.css";
// import "./css/svg_mark.css";

export function MainContent() {
    const [checkboxValue] = useState(true);

    // const requestPermission = async () => {
    //     const granted :any = await Permissions. .contacts.request();
    //     if (granted === 'granted') {
    //       // Доступ к контактам разрешен
    //     } else {
    //       // Пользователь отказал в доступе
    //     }
    //  };


    // function addContact(name :any, phoneNumber :any) {
    //     Contacts.create({
    //        displayName: name,
    //        phoneNumbers: [
    //           {
    //              value: phoneNumber,
    //              type: 'mobile'
    //           }
    //        ],
    //        emailAddresses: [],
    //        urls: []
    //     });
    //  }

    const handlerToggleClearSVG = () => {

    }

    return (
        <>
            <div className="common-container">
                {/* <video autoPlay loop muted >
                    <source src="./videos/background.MP4" type="video/MP4" />
                </video> */}
                <img src="./images/background/beautifult_sky.jpg" alt="Фон" />

                <div className="content-container">
                    <div className="href_toggle-bar">
                        {/* <a href="#" id="href_toggle-bar-first">
                            Цифровая визитка
                        </a>
                        <a href="https://tourstore.online/" id="href_toggle-bar-second">
                            Основной сайт
                        </a> */}
                        {/* <img src={toggle} alt="" /> */}
                        <div className="href_toggle-bar_svg" dangerouslySetInnerHTML={{ __html: toggleClearSVG }} onClick={handlerToggleClearSVG}></div>
                        <div className="href_toggle-bar_text">
                            <a href="https://tourstore.online/" id="href_toggle-bar-first">Основной сайт</a>
                            <a href="#"id="href_toggle-bar-second" >Цифровая визитка</a>
                        </div>
                    </div>


                    {/* Шапка */}
                    <div className="header_container">
                        {/* <h2></h2><h2></h2> */}
                        {/* <h1>
                            <a href="https://tourstore.online/">Tourstore.online</a>
                        </h1> */}
                        <a href="https://tourstore.online/" target="_blank"><img src={logoHref} alt="Логотип" /></a>

                    </div>
                    {/* Блок с checkbox-сами */}
                    <div className="checkbox-container">
                        <div className="checkbox-container_item">
                            {/* <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg> */}
                            {/* <input type="checkbox" defaultChecked={checkboxValue} disabled /> */}
                            <img src={chackboxToggleBar} alt="Тумблер" />
                            <li>Более 40 тысяч довольных туристов</li>
                            {/* <input type="checkbox" id="switch" className="checkbox" defaultChecked={checkboxValue} />
                            <label htmlFor="switch"></label> */}
                        </div>
                        <div className="checkbox-container_item">
                            {/* <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg> */}
                            {/* <input type="checkbox" defaultChecked={checkboxValue} disabled /> */}
                            <img src={chackboxToggleBar} alt="Тумблер" />
                            <li>Опыт в туризме более 12 лет</li>
                            {/* <input type="checkbox" id="switch" className="checkbox" defaultChecked={checkboxValue} />
                            <label htmlFor="switch"></label> */}
                        </div>
                        <div className="checkbox-container_item">
                            {/* <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg> */}
                            {/* <input type="checkbox" defaultChecked={checkboxValue} disabled /> */}
                            <img src={chackboxToggleBar} alt="Тумблер" />
                            <li>На связи 24/7</li>
                            {/* <input type="checkbox" id="switch" className="checkbox" defaultChecked={checkboxValue} />
                            <label htmlFor="switch"></label> */}
                        </div>
                    </div>
                    {/* Кнопки*/}
                    <div className="buttons-container flex">
                        <a href="tel:+79308770633" target="_blank">
                            {/* <a href="https://tourstore.online/Tours/"> */}
                            <img src={phone} alt="" />
                            <span>Позвонить</span>
                        </a>
                    </div>
                    <div className="green-buttons">
                        <a href="https://wa.me/+79308770633" target="_blank">
                            <img src={whatsappIcon} alt="Иконка WhatsApp" />
                            <span>Написать <br /> в WhasApp</span>
                        </a>
                        <a href="https://t.me/+79308770633" target="_blank">
                            <img src={tgIcon} alt="Иконка Telegram" />
                            <span>Написать <br /> в Telegram</span>
                        </a>
                        <a href="https://vk.com/im?media=&sel=-52963605" target="_blank">
                            <img src={vkIcon} alt="Иконка VK" />
                            <span>Написать <br /> в Vk</span>
                        </a>
                        {/* <a href="#callbackwidget" target="_blank">
                            <img src={requestCall} alt="Иконка по запросу звонка" />
                            <span>Заказать обратный звонок</span>
                        </a> */}
                    </div>
                    <div className="buttons-container flex">
                        {/* tel:88002220633 */}
                        {/* <a href="./vcf/vcard.vcf"> */}
                        <a href="https://tourstore.online/contacts/TourStore.vcf"
                            target="_blank"
                        // onClick={() => addContact('Иван Иванов', '+79991234567')}    
                        >
                            <img src={user} alt="Сохранить контакт" />
                            <span>Сохранить контакт</span>
                        </a>
                    </div>
                    {/* Карусель с контактами */}
                    {/* <div className="contacts-container_text">
                    </div> */}
                    <div className="contacts-container_block">
                        <span>Всё самое выгодное и интересное –  <br /> в наших сообществах:</span>
                        <div className="contacts-container">
                            <a href="https://vk.com/tourstore.online" target="_blank">
                                <img src={VkHref} alt="Vk" />
                            </a>
                            <a href="https://www.instagram.com/tourstore.online" target="_blank">
                                <img src={InstHref} alt="Inst" />
                            </a>
                            <a href="https://t.me/TourStore_online" target="_blank">
                                <img src={TgHref} alt="Tg" />
                            </a>
                            <a href="https://www.youtube.com/@Tourstore.online" target="_blank">
                                <img src={YouTubeHref} alt="Youtube" />
                            </a>
                        </div>
                    </div>
                    {/* Кнопки*/}
                    <div className="buttons-container flex">
                        <a href="https://tourstore.online/Tours/" target="_blank">
                            <img src={lupe} alt="" />
                            <span>Найти тур</span>
                        </a>
                    </div>
                    <div className="dialog">
                        <img src="./images/icons/avatar.png" alt="" />
                        <div className="dialog-content">
                            <span>
                                Привет! Меня зовут Ирина Гапич. Я основатель и руководитель мультибрендовой сети турагентств и сервиса по подбору туров TourStore.
                                <br /><br />
                                Обратившись к нам, вы сделали верный выбор.
                                <br /><br />
                                Организация отдыха – хоть и приятная, но очень кропотливая работа: она не прощает даже мельчайших просчётов. Лучше доверить её тому, кто занимается ей ежедневно и знает все "подводные камни" и тонкости.
                            </span>
                        </div>
                    </div>
                    {/* <div className="find-tours-container flex">
                        <a href="https://tourstore.online/Tours/">Найти тур</a>
                        <a href="https://tourstore.online/Tours/">Подписаться на рассылку</a>
                    </div> */}
                    {/* Подвал */}
                    <div className="footer-container">
                        <h3>Наши специалисты</h3>
                        <div className="slider-container">
                            <ImageSliderButton items={[
                                {
                                    image: './images/staff/Matushkina.png',
                                    href: "https://wa.me/+79009666545",
                                    hrefCompany: "https://tourstore.online/company/staff/anastasiya-matyushkina/",
                                    name: "Матюшкина",
                                },
                                {
                                    image: './images/staff/Romanova.png',
                                    href: "https://wa.me/+79157901990",
                                    hrefCompany: "https://tourstore.online/company/staff/yana-romanova/",
                                    name: "Романова",
                                },
                                {
                                    image: './images/staff/Hlebnikova.png',
                                    href: "https://wa.me/+79028889828",
                                    hrefCompany: "https://tourstore.online/company/staff/ekaterina-khlebnikova/",
                                    name: "Хлебникова",
                                },
                                {
                                    image: './images/staff/Kornushova.png',
                                    href: "https://wa.me/+79107717892",
                                    hrefCompany: "https://tourstore.online/company/staff/elizaveta-kornishova/",
                                    name: "Корнишова",
                                },
                                {
                                    image: './images/staff/Timofeeva.png',
                                    href: "https://wa.me/+79028889818",
                                    hrefCompany: "https://tourstore.online/company/staff/elena-timofeeva/",
                                    name: "Тимофеева",
                                },
                                {
                                    image: './images/staff/Koshkina.png',
                                    href: "https://wa.me/+79511027000",
                                    hrefCompany: "https://tourstore.online/company/staff/elena-koshkina/",
                                    name: "Кошкина",
                                },
                                {
                                    image: './images/staff/Tovmasyan.png',
                                    href: "https://wa.me/+79107717890",
                                    hrefCompany: "https://tourstore.online/company/staff/maryam-tovmasyan/",
                                    name: "Товмасян",
                                },
                                {
                                    image: './images/staff/Plukiene.png',
                                    href: "https://wa.me/+79009666505",
                                    hrefCompany: "https://tourstore.online/company/staff/plukiene-lyudmila/",
                                    name: "Плукиене",
                                },
                            ]} />
                        </div>
                        <h3>Наши офисы</h3>
                        <div className="slider-container"><ImageSliderOffice items={[
                            {
                                image: './images/SliderHouses/funsun.png',
                                href: "https://tourstore.online/contacts/kasimov/FunSun/",
                                hrefIframe: "https://yandex.ru/sprav/widget/rating-badge/129242560997?type=rating",
                            },
                            {
                                image: './images/SliderHouses/pegas.png',
                                href: "https://tourstore.online/contacts/murom/pegas/",
                                hrefIframe: "https://yandex.ru/sprav/widget/rating-badge/155040791267?type=rating",
                            },
                            {
                                image: './images/SliderHouses/anex.png',
                                href: 'https://tourstore.online/contacts/murom/anex/',
                                hrefIframe: "https://yandex.ru/sprav/widget/rating-badge/173190705493?type=rating",
                            }
                        ]} />
                        </div>
                        {/* <div className="search_tours">
                            <span>Неудобно ехать в офис? <a href="https://tourstore.online/Tours/" target="_blank">Бронируйте онлайн!</a></span>
                        </div> */}
                        <div className="alarm-container">
                            <div className="alarm-container_block">
                                <img src={notification} alt="Уведомление" />
                                <a href="https://tourstore.online/Tours/">Бронируйте онлайн</a>
                            </div>
                            {/* <div className="alarm-container_reviews">
                                <span>Читать отзывы</span>
                            </div> */}
                        </div>
                        {/* <SimpleSlider/> */}
                        <div className="attributes">
                            <span>
                                ООО "Турсистемы" <br />
                                ОГРН: 1136226000151 <br />
                                Реестровый номер 0012871 <br />
                                в едином федеральном реестре турагентов
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}