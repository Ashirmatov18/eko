import React from "react";
import "../../../styles/Creation.css";
import Sliders from "../../js/Sliders";

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

      <Sliders id="slider_id" />
    </div>
  );
}
