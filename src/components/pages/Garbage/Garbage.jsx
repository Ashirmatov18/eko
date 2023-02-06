import React from "react";
import "../../../styles/Garbage.css";
import Footer from "../../container/Footer/Footer";
import Header from "../../container/Header/Header";
import MainLayout from "../../MainLayout";
import Sliders from "../../js/Sliders";

export default function Garbage() {
  return (
    <MainLayout>
      <div className="garbage_bg">
        <Header />
        <h1>Мусоропереработка</h1>
        <h3>Самые экологичные технологии</h3>
      </div>

      <div className="fluids">
        <h1>Технология «Сверхкритические флюиды» - СКФТ</h1>

        <div className="garbage_slide">
          <div className="first_garbage_info">
            <div>
              <span style={{ fontSize: "18px" }}>
                Технология СКФT предполагает выделение органической составляющей
                из жидких отходов путем их полной газификации при высоком
                давлении и температуре в герметичном объеме без выбросов в
                окружающую среду. В результате переработки получают газообразную
                фракцию углеводородов, состоящую в основном из метана, водорода,
                этана и пропана, и жидкую фракцию в виде воды, в которой
                находится минеральная составляющая.
              </span>
            </div>
          </div>
          <div className="second_garbage_info"></div>
        </div>

        <div className="table"></div>

        <div className="micro">
          <div>
            <h1>Комплекс утилизации медицинских отходов (КУМО)</h1>
            <div className="garbage_slide">
              <div className="first_garbage_info">
                <div className="slide_number">
                  <p>01</p>
                </div>
                <div style={{ marginTop: "150px" }}>
                  <span style={{ fontSize: "18px", paddingTop: "130px" }}>
                    После обработки отходы эпидемиологически и экологически
                    безопасны Возможность переработки всех видов отходов
                    Исключение перегрузки и хранения Возможность передислокации
                  </span>
                </div>
              </div>
              <div className="micro_termic"></div>
            </div>
          </div>

          <div style={{ marginTop: "80px" }}>
            <h1>Микроволновая термическая обработка (МТО)</h1>
            <div style={{ height: "649px" }} className="garbage_slide">
              <div
                style={{ paddingTop: "48px", paddingLeft: "30px" }}
                className="first_garbage_info"
              >
                <div className="slide_number">
                  <p>02</p>
                </div>
                <div style={{ marginTop: "70px", textAlign: "center" }}>
                  <h3 style={{ marginBottom: "0" }}>Технология</h3>
                  <span style={{ fontSize: "18px" }}>
                    Основана на воздействии концентрированного микроволнового
                    поля на нейтрализуемый материал и опасные газы.
                  </span>
                  <h3 style={{ marginBottom: "0" }}>Температура</h3>
                  <span style={{ fontSize: "18px" }}>
                    Моментальный разогрев отходов до 1000 °C с высокой
                    концентрацией СВЧ - поля.{" "}
                  </span>
                  <h3 style={{ marginBottom: "0" }}>Утилизация отходов</h3>
                  <span style={{ fontSize: "18px" }}>
                    От биологических отходов (туши животных, помет с подстилкой)
                    до ядохимикатов (ДДТ, хомецин, симазин, дихлорин, медаксон,
                    и др.), медицинских отходов.{" "}
                  </span>
                </div>
              </div>
              <div className="termic">
                <div className="first_termic"></div>
                <div className="second_termic"></div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "80px" }}>
            <h1>Плазменный реактор для переработки твердых отходов</h1>
            <div className="garbage_slide">
              <div className="first_garbage_info">
                <div className="slide_number">
                  <p>01</p>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <span style={{ fontSize: "18px", paddingTop: "30px" }}>
                    Плазма, благодаря высоким температурам до 4000 °C, позволяет
                    разрушить любые отходы до атомарного уровня, что делает
                    плазменные технологии наиболее эффективным и экологически
                    чистым методом переработки всего спектра отходов
                    производимых человеком. Плазменные технологии позволяют
                    вовлечь в повторный оборот максимальное количество вещества,
                    находящегося в отходах.
                  </span>
                </div>
              </div>
              <div className="plazma"></div>
            </div>
          </div>

          <div style={{ marginTop: "80px" }}>
            <h1>камера МИКРОВОЛНОВОГО ОКИСЛЕНИЯ ГАЗОВ (мог)</h1>
            <div className="garbage_slide">
              <div className="first_garbage_info" style={{ paddingTop: "0" }}>
                <div className="slide_number">
                  <p>01</p>
                </div>
                <div style={{ marginTop: "0" }}>
                  <ul style={{ fontSize: "18px" }}>
                    <li style={{ paddingTop: "20px" }}>
                      Инновация в области утилизации опасных и ядовитых газов;
                    </li>
                    <li style={{ paddingTop: "20px" }}>
                      Метод основан на воздействии концентрированного СВЧ поля
                      на оксиданты в камере;{" "}
                    </li>
                    <li style={{ paddingTop: "20px" }}>
                      Поток газа мгновенно разогревается до температуры выше
                      1000°C;
                    </li>
                    <li style={{ paddingTop: "20px" }}>
                      Все тяжелые металлы оседают на оксидантах, с которых легко
                      удаляются во время технического обслуживания (1/2 раза в
                      год).
                    </li>
                  </ul>
                </div>
              </div>
              <div className="camera">
                <div className="first_camera"></div>
                <div className="second_camera"></div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "80px" }}>
            <h1>Плазменный реактор</h1>
            <div className="garbage_slide">
              <div className="first_garbage_info">
                <div className="slide_number">
                  <p>01</p>
                </div>
                <div style={{ marginTop: "100px" }}>
                  <span style={{ fontSize: "18px", paddingTop: "130px" }}>
                    Плазма, благодаря высоким температурам до 4000 °C, позволяет
                    разрушить любые отходы до атомарного уровня, что делает
                    плазменные технологии наиболее эффективным и экологически
                    чистым методом переработки всего спектра отходов
                    производимых человеком.
                  </span>
                </div>
              </div>
              <div className="reactor"></div>
            </div>
          </div>

          <div style={{ marginTop: "80px" }}>
            <h1>Пиролитический реактор</h1>
            <div className="garbage_slide">
              <div className="first_garbage_info">
                <div className="slide_number">
                  <p>01</p>
                </div>
                <div style={{ marginTop: "150px" }}>
                  <span style={{ fontSize: "18px", paddingTop: "130px" }}>
                    Лабораторный тестовый пиролитический реактор (25 кг/ч) для
                    разработки технологического процесса
                  </span>
                </div>
              </div>
              <div className="piro_reactor"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
}
