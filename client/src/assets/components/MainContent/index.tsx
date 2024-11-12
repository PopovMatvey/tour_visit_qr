import React from "react";
import "./css/style.css";

export function MainContent() {
    return (
        <>
            {/* Шапка */}
            <div className="header_container">
                <h2>Мультибрендовая сеть турагенств</h2>
                <h1>Tourstore.online</h1>
                <img src="" alt="Логотип" />
            </div>
            {/* Блок с checkbox-сами */}
            <div className="checkbox-container">
                <div className="checkbox-container_item">
                    <h3>Более 40 тысяч довольных туристов</h3>
                    <input type="checkbox" />
                </div>
                <div className="checkbox-container_item">
                    <h3>Опыт в туризме более 12 лет</h3>
                    <input type="checkbox" />
                </div>
                <div className="checkbox-container_item">
                    <h3>На связи 24/7</h3>
                    <input type="checkbox" />
                </div>
            </div>
            {/* Карусеьл с контактами */}
            <div className="contacts-container">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            {/* Подвал */}
            <div className="footer-container">
                <h3>Нащи офисы</h3>
            </div>
        </>
    )
}