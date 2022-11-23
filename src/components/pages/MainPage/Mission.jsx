import React from "react";
import styles from "../../../styles/Mission.css";

export default function Mission() {
  return (
    <div className="main-mission">
      <div className="mission">
        <h1 className="our-mission">НАША МИССИЯ</h1>
        <div className="mission-info">
          <span>
            В "Эко Решения" мы считаем, что изменение климата — это кризис
            нашего времени. Мы верим, что экологические технологии являются
            ключевым решением этого глобального вызова, в том числе вопросов
            переработки отходов и обеспечения продовольственной, экологической,
            энергетической и экономической безопасности. Мы создаем зеленое
            будущее путем проектирования и реализации экологических проектов,
            используя синтез из разных технологий. Мы знаем, что решение есть!
          </span>
        </div>
        <div className="invitation">
          <div className="invite-project">
            <h1>приглашаем присоединиться к проекту</h1>
            <button className="first-button">Стать партнером</button>
            <button className="first-button">Стать инвестором</button>
          </div>
          <div>
            <div className="invite-project">
              <h1>стать частью команды</h1>
              <button className="green-button">Стать партнером</button>
            </div>
          </div>
        </div>
      </div>

      <div className="partners">
        <h1>Наши партнеры</h1>

        <div className="partners-icons">
          <div className="eco"></div>
          <div className="kg"></div>
          <div className="jalal"></div>
          <div className="bishkek"></div>
          <div className="jal"></div>
          <div className="neftegaz"></div>
          <div className="vnipi"></div>
          <div className="vodokanal"></div>
          <div className="te"></div>
        </div>
      </div>
    </div>
  );
}
