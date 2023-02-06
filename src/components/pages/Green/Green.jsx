import React from "react";
import "../../../styles/Green.css";
import Footer from "../../container/Footer/Footer";
import Header from "../../container/Header/Header";
import MainLayout from "../../MainLayout";
export default function Green() {
  return (
    <div>
      <MainLayout>
        <div className="green_bg">
          <Header />
          <h1>Зеленая нефтепереработка</h1>
          <h3>Самые экологичные технологии</h3>
        </div>

        <div className="conversion">
          <div className="uap_slider">
            <h1 className="uap_title">
              ПЕРЕРАБОТКА ЖИДКИХ И ТВЁРДЫХ НЕФТЕШЛАМОВ
            </h1>
            <div className="garbage_slide_uap">
              <div className="first_uap_info">
                <div className="first_green">
                  <div className="slide_number">
                    <p>01</p>
                  </div>
                  <div style={{ paddingTop: "200px" }}>
                    <span>
                      Оперативная ликвидация аварийной ситуации Рекультивация
                      грунта
                    </span>
                  </div>
                </div>
              </div>
              <div className="first_bg_picture"></div>
            </div>
          </div>
          <div className="uap_slider">
            <h1 className="uap_title" style={{ marginTop: "70px" }}>
              Утилизация попутного нефтяного газа (ПНГ)
            </h1>

            <div className="garbage_slide_uap">
              <div className="first_conversion_info">
                <div style={{ padding: "25px 0" }}>
                  <ul>
                    <li>
                      Позволяет утилизировать ПНГ с получением полезного
                      продукта–тепловой и электрической энергии, снижая при этом
                      выбросы в атмосферу.
                    </li>
                    <li>
                      Снижение выбросов в атмосферу за счет концентрации
                      ИК-излучения в рабочей зоне.
                    </li>
                    <li>
                      Использование установки УТ-1 за счет стабилизации пламени
                      позволяет проводить переработку буровых шламов,
                      микробиологическое обезвреживание нефтезагрязненных
                      грунтов и нефтешламов на технологической площадке в зоне
                      теплового воздействия факела.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="conversion_bg_picture"></div>
            </div>
          </div>
        </div>
        <Footer id="green_footer" />
      </MainLayout>
    </div>
  );
}
