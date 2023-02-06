import React from "react";
import styles from "../../../styles/Footer.css";
import footerLogo from "../../../images/лого и защита прав.png";
// import lg from "../../../images/te_logo.jpg";
import {
  Facebook,
  Insta,
  Linkedin,
  Telegram,
  Whats,
  Youtube,
} from "./FooterSvg";
import { Link } from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";

export default function Footer(props) {
  return (
    <div className="footer_main" {...props}>
      <ScrollUpButton />

      <div className="first_part">
        <div className="logo">
          <img src={footerLogo} alt="" />
          <div className="address_name">
            <span>
              Абдумомунова, 221 <br /> Первомайский район, Бишкек, 720033
            </span>
          </div>
        </div>

        <div className="call_link">
          <div className="call">
            <h2>Связаться с нами</h2>
            <h3>+996 507 70 35 16</h3>
            <h3>+86 155 2128 2836</h3>
            <div className="face_whats">
              <Facebook />
              <Whats />
            </div>
          </div>

          <div className="link">
            <Telegram />
            <Insta />
            <Linkedin />
            <Youtube />
          </div>
        </div>
      </div>

      <div className="second_part">
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/garbage">Экотехнологии</Link>
          </li>
          <li>
            <Link to="/technologies">Технологии</Link>
          </li>
          <li>
            <Link to="/vacancy">Вакансии</Link>
          </li>
          <li>
            {" "}
            <Link to="/contacts">Контакты</Link>
          </li>
          <li>
            <Link to="/partners">Партнеры</Link>
          </li>
          <li>
            <Link to="/cooperation">Сотрудничество</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
