import React from "react";
import Header from "../../container/Header/Header";
import styles from "../../../styles/Technologies.css";
import MainLayout from "../../MainLayout";
import Footer from "../../container/Footer/Footer";

export default function Technologies() {
  return (
    <MainLayout>
      <div className="tech_background">
        <Header />
        <h1>Технологии</h1>
        <h6>Самые экологичные технологии</h6>
      </div>

      <div className="eee">
        <h1>
          Экологически чистые, экономически окупаемые, энергетически независимые
        </h1>

        <div className="processing">
          <div className="garbage">
            <h2>Мусоропереработка</h2>
            <h5>Рекультивация полигонов Плазменная установка</h5>
            <h5> Акустический (кавитационный) метод газоочистки</h5>
            <h5>Технология СКФТ</h5>
            <h5>Система газоочистки</h5>
          </div>
          <div className="garbage">
            <h2>Зеленая нефтепереработка</h2>
            <h5>Переработка попутных нефтяных газов</h5>
            <h5>Горизонтальная ректификационная колонна</h5>
            <h5>Производство битума</h5>
            <h5> Акустический (кавитационный) метод газоочистки</h5>
          </div>
          <div className="garbage">
            <h2>Переработка сточных вод</h2>
            <h5>УАП 4 </h5>
            <h5>УАП 5</h5>
            <h5>Блок водоподготовки</h5>
          </div>
        </div>

        <h1
          className="innovation_title"
          style={{ marginTop: "400px", marginBottom: "50px" }}
        >
          Инновационные технологии
        </h1>
        <div className="innovation">
          <div className="rice">
            <h2 className="rice_text">Переработка шелухи риса</h2>
          </div>
          <div className="sand">
            <h2 className="rice_text">Кварцевый песок</h2>
          </div>
          <div className="cement">
            <h2 className="rice_text">
              {" "}
              Уменьшение выбросов на цементных заводах{" "}
            </h2>
          </div>
        </div>

        <h1
          className="advantage_title"
          style={{ marginTop: "100px", marginBottom: "50px" }}
        >
          Преимущества
        </h1>
        <div className="processing">
          <div className="advantages">
            <div className="text_adv">
              <h2>Экологичность</h2>
            </div>
            <div className="adv_picture"></div>
          </div>
          <div className="advantages">
            <div className="text_adv">
              <h2>Минимальные выбросы</h2>
            </div>
            <div className="adv_picture_two"></div>
          </div>
          <div className="advantages">
            <div className="text_adv">
              <h2>Экономическая выгода</h2>
            </div>
            <div className="adv_picture_three"></div>
          </div>
        </div>
      </div>

      <Footer style={{ marginTop: "400px" }} id="footer_tech" />
    </MainLayout>
  );
}
