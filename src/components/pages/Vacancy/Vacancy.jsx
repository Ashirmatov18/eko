import React from "react";
import "../../../styles/Vacancy.css";
import Footer from "../../container/Footer/Footer";
import Header from "../../container/Header/Header";
import MainLayout from "../../MainLayout";

export default function Vacancy() {
  return (
    <div className="vacancy">
      <MainLayout>
        <div className="vacancy_bg">
          <Header />
          <h1>Вакансии</h1>
          <h3>Приглашаем строить экологичное будущее вместе с нами!</h3>
        </div>
        <div className="vacancy_production">
          <h1>Наша миссия</h1>
          <div className="production_area">
            <div className="production_bg_info_v">
              <span>
                В "Эко Решения" мы считаем, что изменение климата — это кризис
                нашего времени. <br /> <br /> Мы верим, что технологии являются
                решением этого глобального вызова, в том числе переработка
                отходов и обеспечение продовольственной, экологической,
                энергетической, экономической безопасности. Мы создаем зеленое
                будущее путем проектирования и реализации экологических
                проектов, используя синтез из разных технологий. Мы знаем, что
                решение есть!
              </span>
            </div>

            <div className="production_bg_v"></div>
          </div>
        </div>

        <div className="philosophy">
          <h1>Наша культурная философия</h1>
          <div className="philosophy_info">
            <div className="philosophy_block">
              <p className="phil_id">01</p>
              <h3>Прозрачность</h3>
              <span>
                Честность и открытость касательно данных, результатов,
                применяемых технологий и деятельности
              </span>
            </div>
            <div className="philosophy_block">
              <p className="phil_id">02</p>
              <h3>эмпатия</h3>
              <span>
                Нам не безразлична экологическая ситуация в стране, в мире и
                изменение климата. Хотим менять мир к лучшему.
              </span>
            </div>
            <div className="philosophy_block">
              <p className="phil_id">03</p>
              <h3>сплоченность</h3>
              <span>
                Мы верим, что сплоченность является основой эффективной работы
                компании. Мы формируем единый подход к поставленной цели.
              </span>
            </div>
            <div className="philosophy_block">
              <p className="phil_id">04</p>
              <h3>Развитие</h3>
              <span>
                Мы не хотим стоять на месте. Стремимся к крутым изменениям в
                общественном сознании, в технологиях и в культуре потребления.
              </span>
            </div>
          </div>
          <button className="philosophy_button">Узнать больше</button>
        </div>

        <div className="perspective">
          <h1>Какими мы хотим стать через 5 лет</h1>
          <div className="perspective_cards">
            <div className="global_adv_v">
              <div className="global_info_v">
                <h2>Обеспечение экологической безопасности города</h2>
                <h4>
                  Передовые технологии комплексной переработки твердых бытовых,
                  производственных, сельскохозяйственных отходов с минимальными
                  выбросами в окружающую среду.{" "}
                </h4>
              </div>
              <div className="coop_picture_v"></div>
            </div>
            <div className="global_adv_v">
              <div className="global_info_v">
                <h2>Обеспечение продовольственной безопасности</h2>
                <h4>
                  Обеспечение населения свежими, качественными, дешевыми
                  сельхозпродуктами. Обеспечение продовольственной безопасности
                  города в режиме ЧС.
                </h4>
              </div>
              <div className="coop_picture_v_second"></div>
            </div>
            <div className="global_adv_v">
              <div className="global_info_v">
                <h2>Обеспечение 400 рабочих мест для населения</h2>
                <h4>
                  За 5 лет мы сможем организовать до 400 рабочих мест в
                  муниципальном образовании расположения площадок развития
                  Экотехнопарков.
                </h4>
              </div>
              <div className="coop_picture_v_third"></div>
            </div>
          </div>
        </div>
      </MainLayout>
      <h1 className="work_with_us">Работайте с нами!</h1>
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
    </div>
  );
}
