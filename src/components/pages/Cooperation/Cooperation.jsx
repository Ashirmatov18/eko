import React from "react";
import "../../../styles/Cooperation.css";
import Header from "../../container/Header/Header";
import firstKons from "../../../images/image 34.jpg";
import MainLayout from "../../MainLayout";
import Footer from "../../container/Footer/Footer";
import partnerIcons from "../../js/partner";

const coopIcons = [
  {
    id: 1,
    image: "/z.jpg",
    title: "Поиск",
    text: "Вы ищете редкий станок для чистого экологического производства?",
  },
  {
    id: 2,
    image: "/x.jpg",
    title: "Убывающий бюджет",
    text: "В поиске вариантов экономии и сохранения и без того убывающего бюджета?",
  },
  {
    id: 3,
    image: "/c.jpg",
    title: "Сложности",
    text: "Не можете подобрать подходящее оборудование из-за сложностей инженерингового решения?",
  },
];

const helpIcons = [
  {
    id: 1,
    image: "/v.jpg",
    title: "Подберем",
    text: "Мы подберем для вас необходимое оборудование для экологически чистого производства",
  },
  {
    id: 2,
    image: "/b.jpg",
    title: "Доставим и оформим",
    text: "Доставим и оформим необходимое оборудование  ",
  },
  {
    id: 3,
    image: "/n.jpg",
    title: "Документация",
    text: "Подготовим вам всю необходимую  документацию",
  },
];

const proffIcons = [
  {
    id: 1,
    image: "/v.jpg",
    title: "Мировые партнеры",
    text: "Наши партнеры производители Китай, Россия, США, Корея, Япония, ЕС",
  },
  {
    id: 2,
    image: "/m.jpg",
    title: "Сильная команда",
    text: "Сильная команда из лучших инженеров со стран СНГ",
  },
  {
    id: 3,
    image: "/,.jpg",
    title: "Комлексное решение",
    text: "Подготовим вам всю необходимую  документацию",
  },
];

export default function Cooperation() {
  return (
    <>
      <MainLayout>
        <div className="coop_bg">
          <Header />
          <h1>Сотрудничство</h1>
          <h3>
            Поставка оборудования, сырья и товаров для экологичного производства
          </h3>
          <div className="coop_but">
            <button>Связаться с нами</button>
          </div>
        </div>
        <div>
          <div className="global">
            <h1>Перед вами стоят глобальные проблемы?</h1>
            <div className="global_coop">
              {!!coopIcons && coopIcons.length > 0 ? (
                coopIcons.map((coop) => (
                  <div className="global_adv">
                    <div className="global_info">
                      <h2>{coop.title}</h2>
                      <h4>{coop.text}</h4>
                    </div>
                    <div
                      className="coop_picture"
                      style={{ backgroundImage: `url(${coop.image})` }}
                    ></div>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>

            <div style={{ marginTop: "500px" }}>
              <h1>Мы поможем Вам!</h1>
              <div className="global_coop">
                {!!helpIcons && helpIcons.length > 0 ? (
                  helpIcons.map((coop) => (
                    <div className="global_adv">
                      <div className="global_info">
                        <h2>{coop.title}</h2>
                        <h4>{coop.text}</h4>
                      </div>
                      <div
                        className="coop_picture"
                        style={{ backgroundImage: `url(${coop.image})` }}
                      ></div>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div style={{ marginTop: "500px" }}>
              <h1>Доверьтесь Профессионалам</h1>
              <div className="global_coop">
                {!!proffIcons && proffIcons.length > 0 ? (
                  proffIcons.map((coop) => (
                    <div className="global_adv">
                      <div className="global_info">
                        <h2>{coop.title}</h2>
                        <h4>{coop.text}</h4>
                      </div>
                      <div
                        className="coop_picture"
                        style={{ backgroundImage: `url(${coop.image})` }}
                      ></div>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="coop_partners">
            <h1>Официальные партнеры</h1>
            <div className="kons_list">
              {!!partnerIcons && partnerIcons.length > 0 ? (
                partnerIcons.map((partner) => {
                  return (
                    <img
                      key={partner.id}
                      src={partner.img}
                      alt=""
                      className="kons_partners"
                    />
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </MainLayout>
      <h1 className="title_recall">мы перезвоним Вам в течении двух часов</h1>

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
    </>
  );
}
