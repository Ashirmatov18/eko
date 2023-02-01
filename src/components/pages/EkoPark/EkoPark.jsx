import React from "react";
import "../../../styles/EkoPark.css";
import Header from "../../container/Header/Header";
import MainLayout from "../../MainLayout";
import results from "../../js/results";
import Footer from "../../container/Footer/Footer";

const image = [
  {
    id: "01",
    img: "/11.jpg",
    description: "Производство рыбы",
  },
  {
    id: "02",
    img: "/22.jpg",
    description: "Изготовление растительной составляющей биокормов",
  },
  {
    id: "03",
    img: "/33.jpg",
    description: "Тепличный комплекс ",
  },
  {
    id: "04",
    img: "/44.jpg",
    description: "Выращивание плодоовощной продукции на участках",
  },
];

const secondImage = [
  {
    id: "01",
    img: "/1111.jpg",
    description:
      "Минеральная составляющая, возникающая при термохимической переработке отходов",
  },
  {
    id: "02",
    img: "/2222.jpg",
    description: "Техническая вода",
  },
  {
    id: "03",
    img: "/3333.jpg",
    description:
      "Экопочвогрунт для производства удобрений и тепличного хозяйства  ",
  },
  {
    id: "04",
    img: "/4444.jpg",
    description: "Синтез газ для производства электрической и теплоэнергии",
  },
];

export default function EkoPark() {
  return (
    <MainLayout>
      <div className="ekopark_bg">
        <Header />
        <h3>Кыргызской Республики</h3>
      </div>

      <div className="main_ekopark">
        <h1>Угрожающая ситуация</h1>

        <div className="threat">
          <div className="threat_block">
            <h2>25%</h2>
            <h5>сокращение</h5>
            <span>
              По данным ООН к 2050 году ожидается уменьшение воды в Чуйской{" "}
              <br />
              Области на четверть
            </span>
          </div>
          <div className="threat_block">
            <h2>88-96</h2>
            <h5 style={{ paddingTop: "0", height: "35px" }}>
              тыс м <sup>2</sup>{" "}
            </h5>
            <span>
              Очищенной воды ежедневно не используется в КР и отправляется через
              реку Чу и используется в Казахстане
            </span>
          </div>
        </div>

        <h1>Наше проектное решение</h1>

        <div className="project_decision">
          <div className="first_project_decision">
            <span>
              Проект создания полностью автономного инновационного Экотехнопарка
              и Агропромышленного комплекса предусматривает реализацию
              экологическим консорциумом ОсОО “Эко Решения”, ООО “Омега” и ПЭУ
              “Бишкекводоканал” на площадке Бишкекских Очистных Сооружений
            </span>
            <p>
              Основная концепция предусматривает идею ноль отходов + доходы. Из
              убытков в прибыль, из потребления в производство и из красной
              экологической зоны в зеленую
            </p>
          </div>
          <div className="second_project_decision">
            <button>Очистка</button>
            <div className="vector"></div>
            <button>Переработка</button>
            <div className="vector"></div>
            <button>Производство</button>
          </div>
        </div>

        <div className="opp">
          <h1 style={{ color: "#ffffff" }}>Возможности Экотехнопарка</h1>
          <div className="eko_facilities">
            <div className="facilities">
              <h4>Переработка</h4>
              <p>01</p>
              <span>
                Комплексная переработка отходов по программе “Ноль отходов” на
                площадке БОС
              </span>
            </div>
            <div className="facilities">
              <h4>Топливо</h4>
              <p>02</p>
              <span>
                Использование альтернативных видов топлива, получаемых из всех
                видов отходов{" "}
              </span>
            </div>
            <div className="facilities">
              <h4>Продукция</h4>
              <p>03</p>
              <span>
                Выпуск и реализация новой инновационной продукции на площадках
                ЭКР
              </span>
            </div>
          </div>
        </div>

        <div className="implementation">
          <h1>Место реализации на примере Бишкекских очистных сооружений</h1>

          <div className="ga">
            <div className="ga_bg"></div>
            <div className="ga_bg_info">
              <h3>96 гектаров площадки БОС в г. Бишкек</h3>
              <span>
                Общая площадь очистных сооружений - 96 га. Из них 48 га -
                площадка БОС, 48 га - площадка развития и место складирования
                отходов БОС
              </span>
            </div>
          </div>

          <div className="center">
            <h1>Центры Экр</h1>
            <div className="center_info">
              <div className="center_blocks">
                <div className="left"></div>
                <h3>Производственно-испытательный центр ЭКР</h3>
              </div>
              <div className="center_blocks">
                <div className="bottom"></div>
                <h3>Научно-технический </h3>
              </div>
              <div className="center_blocks">
                <div className="right"></div>
                <h3>Выставочный</h3>
              </div>
            </div>
          </div>

          <div className="production">
            <h1>Производственная площадка развития</h1>

            <div className="production_area">
              <div className="production_bg_info">
                <h3>48 гектaров площадки БОС в г. Бишкек</h3>
                <span>
                  Производственная площадка БОС подразумевает собой производство
                  различной экологически чистой продукции.
                </span>
              </div>

              <div className="production_bg"></div>
            </div>

            {/* <div className="image_list">
              <div className="first_image_list">
                {!!image && image.length > 0
                  ? image.map((product) => {
                      return (
                        <div className="image_list_card" key={product.id}>
                          <div
                            style={{ background: `url(${product.img})` }}
                            className="image_list_img"
                          >
                            <p className="image_list_id">{product.id}</p>
                          </div>
                          <span className="image_list_desc">
                            {product.description}
                          </span>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div> */}

            <h1 className="area_develop">Площадка по развитию агротуризма </h1>

            <div className="agro">
              <div className="first_agro"></div>
              <div className="second_agro">
                <h3 style={{ paddingTop: "100px" }}>
                  Агропромышленный комплекс <br /> Экотехнопарка 16 га.
                </h3>
                <span>
                  Основные направления деятельности: <br /> Экологическая
                  деревня агротуризма. <br /> Центр дошкольного и школьного
                  экологического образования <br /> (около 1000 кв. метров).
                </span>
              </div>
            </div>

            <h1 className="reconstruction_title" style={{ marginTop: "150px" }}>
              реконструкция БОС
            </h1>

            <div className="reconstruction">
              <div className="first_rec">
                <h1>01</h1>
                <span>
                  Работы по реконструкции проводятся без вмешательства в
                  технологический процесс
                </span>
                <h1>02</h1>
                <span>
                  Реконструкция позволяет полностью утилизировать отходы БОС и
                  уменьшить затраты
                </span>
                <h1>03</h1>
                <span>
                  Использовать здания и сооружения БОС для производтва по схеме
                  “Отходы ноль +Доходы”
                </span>
              </div>
              <div className="second_rec"></div>
            </div>

            <h1 className="tech_title" style={{ marginTop: "150px" }}>
              Оборудование по переработке отходов на площадке Экотехнопарка
            </h1>

            <div className="taken_production">
              {!!secondImage && secondImage.length > 0
                ? secondImage.map((product) => {
                    return (
                      <div className="image_list_card" key={product.id}>
                        <div
                          style={{ background: `url(${product.img})` }}
                          className="image_list_img"
                        >
                          <p className="image_list_id">{product.id}</p>
                        </div>
                        <span className="image_list_description">
                          {product.description}
                        </span>
                      </div>
                    );
                  })
                : ""}
            </div>

            <div className="behaviours"></div>

            <h1 className="results_title" style={{ marginTop: "1150px" }}>
              Результаты
            </h1>
            <div className="results_pos">
              {!!results && results.length > 0
                ? results.map((cards) => {
                    return (
                      <div className="results_main">
                        <div className="results_card" key={cards.id}>
                          <span>{cards.text}</span>
                          {!!cards.img ? (
                            <img
                              style={{ background: `url(${cards.img})` }}
                              className="results_img"
                              alt="cards_img"
                            />
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
          <div className="investment"></div>
          <h1 style={{ marginTop: "1050px" }}> Окупаемость</h1>
          <div className="profitability">
            <div className="first_profit"></div>
            <div className="second_profit">
              <h3 style={{ paddingTop: "100px" }}>
                Агропромышленный комплекс <br /> Экотехнопарка 16 га.
              </h3>
              <span>
                Основные направления деятельности: <br /> Экологическая деревня
                агротуризма. <br /> Центр дошкольного и школьного экологического
                образования <br /> (около 1000 кв. метров).
              </span>
            </div>
          </div>

          <h1 style={{ marginTop: "250px" }}>График работ</h1>
          <div className="main_graph">
            <div className="graph_card">
              <h2>
                Этап №1 <br /> 2022 год
              </h2>
            </div>
            <div className="big_card_graph">
              <h2>
                Этап №2 <br /> 2023 год
              </h2>
              <span>
                1) Выполнение проекта и проведение экспертизы проекта <br /> 2)
                Выполнение строительно-монтажных работ инфраструктуры объектов{" "}
                <br />
                3) Проведение НИОКР на пусковых объектах научно-технического
                центра <br /> 4) Строительство логистического центра
              </span>
            </div>
            <div className="graph_card">
              <h2>
                Этап №3 <br /> 2023-24 годы
              </h2>
            </div>
            <div className="graph_card">
              <h2>
                Этап №4 <br /> 2024-25 годы
              </h2>
            </div>
            <div className="graph_card">
              <h2>
                Этап №5 <br /> 2025 год
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
}
