import React from "react";
import "../../../styles/Uap.css";
import Footer from "../../container/Footer/Footer";
import Header from "../../container/Header/Header";
import MainLayout from "../../MainLayout";

export default function Uap() {
  return (
    <div className="uap">
      <MainLayout>
        <div className="uap_bg">
          <Header />
          <h1>УАП</h1>
          <h3>Самые экологичные технологии</h3>
        </div>

        <div className="vacancy_production">
          <h1 className="uap_title">Технологии</h1>
          <div className="production_area">
            <div className="production_bg_info_u">
              <span>
                Главная составляющая этого технологического процесса —
                электромагнитное поле высокой мощности в трубе диаметром 158 мм,
                в котором вращающиеся «иголки» осуществляют ударное воздействие
                на обрабатываемое вещество. На выходе конечный продукт
                приобретает качественно новые свойства.
              </span>
            </div>

            <div className="production_bg_uap"></div>
          </div>
        </div>

        <div className="uap_slider">
          <h1 className="uap_title">
            Установка активации процессов - очистка сточных вод
          </h1>
          <div className="garbage_slide_uap">
            <div className="first_uap_info">
              <div style={{ padding: "25px 0" }}>
                {/* <span style={{ fontSize: "18px", paddingTop: "130px" }}>
                  Лабораторный тестовый пиролитический реактор (25 кг/ч) для
                  разработки технологического процесса
                </span> */}
                <ul>
                  <li>Технологическая линия с нулевым выбросом.</li>
                  <li>Переработка широкого перечня отходов.</li>
                  <li>
                    Комплексы являются полностью конструкторской, а не проектной
                    разработкой для каждого вида отходов.
                  </li>
                  <li>
                    Не требуют подключения к инженерным сетям, не требуют
                    фундамента.
                  </li>
                  <li>
                    Позволяют менять потребительские свойства изделия в процессе
                    эксплуатации.
                  </li>
                  <li>
                    Мобильные, в габаритах 40 футового морского контейнера, с
                    платформой для транспортировки.
                  </li>
                </ul>
              </div>
            </div>
            <div className="uap_bg_picture"></div>
          </div>
        </div>

        <div className="work_energy">
          <h1 className="uap_title">Работа на собственном энергообеспечении</h1>

          <div className="processing">
            <div className="garbage">
              <h2>Многократность</h2>
              <h5 className="work_text">
                Синтез-газ, жидкое и твердое синтетическое топливо; топливо для
                заправки автотранспорта, электрическая и тепловая энергия.{" "}
              </h5>
            </div>
            <div className="garbage">
              <h2>Интегрированная очистка</h2>
              <h5 className="work_text">
                Интегрированная очистка непосредственно сразу после образования
                отходов.
              </h5>
            </div>
            <div className="garbage">
              <h2>Степень переработки</h2>

              <h5 className="work_text">
                Высокая степень переработки исходного сырья (всех видов отходов
                БОС) до 95% от исходного объема.
              </h5>
            </div>
          </div>
        </div>
      </MainLayout>

      <Footer id="footer_uap" />
    </div>
  );
}
