import React from "react";
import "../../../styles/Creation.css";

export default function Creation() {
  return (
    <div className="creation">
      <div>
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
          <div className="first_section_image"></div>
        </div>
        <div className="second_section">
          <div className="second_section_image"></div>
        </div>
      </div>

      <div className="slider">
        <div className="first_eko">
          <h2>Экотехнопарк</h2>
          <div>
            <span style={{ fontSize: "18px" }}>
              <strong>
                Создание полностью автономного инновационного Экотехнопарка и
                Агропромышленного комплекса
              </strong>{" "}
              <br /> <br />
            </span>
            <span style={{ fontSize: "15px" }}>
              Проект предусматривает реализацию экологическим консорциумом ОсОО
              «Эко Решения», ООО «НПО «ОМЕГА» и ПЭУ «Бишкекводоканал»
            </span>
          </div>
          <button
            className="button_more
          "
          >
            Узнать больше
          </button>
        </div>
        <div className="second_eko"></div>
      </div>
    </div>
  );
}
