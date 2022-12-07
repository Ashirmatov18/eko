import React from "react";
import styles from "../../../styles/Contacts.css";
import Header from "../../container/Header/Header";
import MainLayout from "../../MainLayout";
import Footer from "../../container/Footer/Footer";

export default function Contacts() {
  return (
    <>
      <MainLayout>
        <div className="contacts_bg">
          <Header />
          <h1>Контакты</h1>
          <div className="contacts_but">
            <button>Свяжитесь с нами</button>
          </div>
        </div>

        <div className="search" style={{ marginTop: "930px" }}>
          <h1>Как найти нас</h1>
          <div className="map_info">
            <div className="map"></div>
            <div className="address_info">
              <h2>Адрес</h2>
              <h4>Абдумомунова, 221, Первомайский район, Бишкек, 720033</h4>

              <h2>Телефон</h2>
              <h4>+996 507 70 35 16</h4>
              <h4>+86 155 2128 2836</h4>

              <h2>E-mail</h2>
              <h4>nurislam.ashirmatov@ecosolutions.group</h4>
              <h4>malika.saparova@ecosolutions.group</h4>
            </div>
          </div>
        </div>
        <h1 className="connection">Свяжитесь с нами</h1>
      </MainLayout>
      <div className="connect_us">
        <div className="message">
          <h1>Оставить сообщение</h1>
          <div className="input_group">
            <input type="text" placeholder="Ф.И.О" />
            <input type="text" placeholder="E-mail" />
            <select className="select_name" placeholder="Выбрать тему">
              <option value="volvo">Вид</option>
              <option value="saab">!</option>
              <option value="opel">2</option>
            </select>
            <input
              className="input_message"
              type="text"
              placeholder="Ваше сообщение"
            />
          </div>
          <button>Оставить сообщение</button>
        </div>
        <Footer id="footer_contact" />
      </div>
    </>
  );
}
