import React from "react";
import "../../../styles/Partners.css";
import Header from "../../container/Header/Header";
import MainLayout from "../../MainLayout";
import firstKons from "../../../images/image 34.jpg";
import Footer from "../../container/Footer/Footer";
import partnerIcons from "../../js/partner";

const icons = [
  {
    id: 1,
    image: "/image 34.svg",
  },
  {
    id: 2,
    image: "/image 28.svg",
  },
  {
    id: 3,
    image: "/image 29.svg",
  },
  {
    id: 4,
    image: "/image 30.svg",
  },
];

export default function Partners() {
  return (
    <MainLayout>
      <div className="partners_bg">
        <Header />
        <h1>Партнеры</h1>
        <div className="join">
          <h3>Присоединяйтесь к нашей миссии!</h3>
          <h5>
            В "Эко Решения" мы считаем, что изменение климата — это кризис
            нашего времени.
          </h5>
          <h5>
            Мы верим, что технологии являются разрешением этого глобального
            вызова, таких как переработка отходов и обеспечение
            продовольственной, экологической, энергетической, экономической
            безопасности. Мы создаем зеленое будущее путем проектирования и
            реализации экологических проектов, используя синтез из разных
            технологий. Мы знаем, что решение есть!{" "}
          </h5>
          <div className="partners_but">
            <button>Свяжитесь с нами</button>
          </div>
        </div>
      </div>

      <div className="kons">
        <h1>Компании в составе консорциума</h1>
        <div className="kons_list">
          {/* <div className="kons_list"> */}
          {/* <img src={firstKons} alt="" className="kons_partners" />
          <img src={firstKons} alt="" className="kons_partners" />
          <img src={firstKons} alt="" className="kons_partners" />
          <img src={firstKons} alt="" className="kons_partners" /> */}
          {!!icons && icons.length > 0 ? (
            icons.map((icon) => {
              return (
                <img
                  key={icon.id}
                  src={icon.image}
                  className="kons_partners"
                ></img>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="academic">
        <h1>Академические партнеры</h1>
        <div className="kons_list">
          <img src={firstKons} alt="" className="kons_partners" />
          <img src={firstKons} alt="" className="kons_partners" />
          <img src={firstKons} alt="" className="kons_partners" />
          <img src={firstKons} alt="" className="kons_partners" />
        </div>
      </div>

      <div className="academic">
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

      <div className="work_with_us">
        <h1>Приглашаем сотрудничать с нами!</h1>
        <div className="work_button">
          <button>Свяжитесь с нами</button>
        </div>
      </div>

      <Footer />
    </MainLayout>
  );
}
