import React from "react";
import "../../../styles/Mission.css";

export default function Mission() {
  return (
    <div className="main_mission">
      <div className="mission">
        <h1 className="our_mission">НАША МИССИЯ</h1>
        <div className="mission_info">
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
          <div className="invite_project">
            <h1>приглашаем присоединиться к проекту</h1>
            <div className="first_button_group">
              <button className="first_button">Стать партнером</button>
              <button className="first_button">Стать инвестором</button>
            </div>
          </div>
          <div>
            <div className="invite_project">
              <h1>стать частью команды</h1>
              <button className="green_button">Стать партнером</button>
            </div>
          </div>
        </div>
      </div>

      <div className="partners">
        <h1>Наши партнеры</h1>

        <div className="partners_icons">
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

      <div className="news">
        <h1>новости</h1>

        <div className="main_news">
          <div className="news_style">
            <div className="image_news"></div>
            <h2>Lorem ipsum</h2>
            <span>Lorem ipsum dolor sit amet, consectetur adipisc...</span>
            <h4>Больше {`>`}</h4>
          </div>
          <div className="news_style">
            <div className="image_news"></div>
            <h2>Lorem ipsum</h2>
            <span>Lorem ipsum dolor sit amet, consectetur adipisc...</span>
            <h4>Больше {`>`}</h4>
          </div>
          <div className="news_style">
            <div className="image_news"></div>
            <h2>Lorem ipsum</h2>
            <span>Lorem ipsum dolor sit amet, consectetur adipisc...</span>
            <h4>Больше {`>`}</h4>
          </div>
          <div className="news_style">
            <div className="image_news"></div>
            <h2>Lorem ipsum</h2>
            <span>Lorem ipsum dolor sit amet, consectetur adipisc...</span>
            <h4>Больше {`>`}</h4>
          </div>
          <div className="news_style">
            <div className="image_news"></div>
            <h2>Lorem ipsum</h2>
            <span>Lorem ipsum dolor sit amet, consectetur adipisc...</span>
            <h4>Больше {`>`}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
