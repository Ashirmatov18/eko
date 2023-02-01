import React from "react";
import "../../../styles/AboutUs.css";

export default function AboutInfo() {
  return (
    <div className="creation">
      <div className="creation_title">
        <h1>
          Мы создаем зеленое будущее путем проектирования и <br /> реализации
          экологических проектов
        </h1>
      </div>
      <div className="information">
        <div className="first_section">
          <div className="start_info">
            <span>
              В "Эко Решения" мы считаем, что изменение климата — это кризис
              нашего времени. <br /> <br />
              Мы верим, что экологические технологии являются ключевым решением
              этого глобального <br /> вызова, в том числе вопросов переработки
              отходов и обеспечения продовольственной, <br /> экологической,
              энергетической и экономической безопасности. <br /> Мы создаем
              зеленое будущее путем проектирования и реализации экологических{" "}
              <br /> проектов, используя синтез из разных технологий. Мы знаем,
              что решение есть!
            </span>
          </div>
          <div className="first_image"></div>
        </div>
        <div className="second_section">
          <div
            className="second_image
        "
          ></div>
        </div>
      </div>

      <div className="technologies">
        <h1>Наши технологии позволяют</h1>
        <div className="tech_first">
          <div className="picture_info">
            <div className="first_tech_pic"></div>
            <h3>
              Решить проблему переработки продуктов горения с уничтожением
              диоксинов и фуранов
            </h3>
          </div>
          <div className="picture_info">
            <div className="second_tech_pic"></div>
            <h3>Перерабатывать отходы I-V классов опасности</h3>
          </div>
          <div className="picture_info">
            <div className="third_tech_pic"></div>
            <h3>
              Получить новую коммерческую продукцию из отходов, которые
              становятся сырьем для производства
            </h3>
          </div>
        </div>
        <h1 style={{ marginTop: "70px" }}>Преимущества наших решений</h1>
        <div className="tech_first">
          <div className="picture_info">
            <div className="fourth_tech_pic"></div>
            <h2>Экологическая безопасность</h2>
            <h3>
              Нет условий для размножения микроорганизмов и грызунов после
              обеззараживания отходов.
            </h3>
          </div>
          <div className="picture_info">
            <div className="fifth_tech_pic"></div>
            <h2>Благоприятная обстановка</h2>
            <h3>Перерабатывать отходы I-V классов опасности</h3>
          </div>
          <div className="picture_info">
            <div className="sixth_tech_pic"></div>
            <h2>Рациональное использование земли</h2>
            <h3>
              Не нужно выделять большие площади для хранения отходов.
              Рекультивация загрязненных земель.
            </h3>
          </div>
        </div>
        <div className="tech_second"></div>
      </div>

      <div className="e"></div>

      <div className="join_us">
        <h1>Наша команда</h1>

        <div className="stuff">
          <div className="men">
            <div className="person_picture"></div>
            <div className="person_info">
              <h2>Нурислам Аширматов</h2>
              <h5>Генеральный директор</h5>
            </div>
          </div>
          <div className="men">
            <div className="woman_picture"></div>
            <div className="person_info">
              <h2>Малика Сапарова</h2>
              <h5>Экологический менеджер</h5>
            </div>
          </div>
        </div>
        <div className="button_style">
          <button className="join_button">Присоединиться к команде</button>
        </div>
      </div>
    </div>
  );
}
