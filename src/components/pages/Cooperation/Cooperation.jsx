import React from "react";
import styles from "../../../styles/Cooperation.css";
import Header from "../../container/Header/Header";
import firstKons from "../../../images/image 34.jpg";
import MainLayout from "../../MainLayout";
import Footer from "../../container/Footer/Footer";

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
              <div className="global_adv">
                <div className="global_info">
                  <h2>Поиск</h2>
                  <h4>
                    Вы ищете редкий станок для чистого экологического
                    производства?
                  </h4>
                </div>
                <div className="coop_picture"></div>
              </div>
              <div className="global_adv">
                <div className="global_info">
                  <h2>Убывающий бюджет</h2>
                  <h4>
                    В поиске вариантов экономии и сохранения и без того
                    убывающего бюджета?
                  </h4>
                </div>
                <div className="coop_picture"></div>
              </div>
              <div className="global_adv">
                <div className="global_info">
                  <h2>Сложности</h2>
                  <h4>
                    Не можете подобрать подходящее оборудование из-за сложностей
                    инженерингового решения?{" "}
                  </h4>
                </div>
                <div className="coop_picture"></div>
              </div>
            </div>

            <div style={{ marginTop: "500px" }}>
              <h1>Мы поможем Вам!</h1>
              <div className="global_coop">
                <div className="global_adv">
                  <div className="global_info">
                    <h2>Поиск</h2>
                    <h4>
                      Вы ищете редкий станок для чистого экологического
                      производства?
                    </h4>
                  </div>
                  <div className="coop_picture"></div>
                </div>
                <div className="global_adv">
                  <div className="global_info">
                    <h2>Убывающий бюджет</h2>
                    <h4>
                      В поиске вариантов экономии и сохранения и без того
                      убывающего бюджета?
                    </h4>
                  </div>
                  <div className="coop_picture"></div>
                </div>
                <div className="global_adv">
                  <div className="global_info">
                    <h2>Сложности</h2>
                    <h4>
                      Не можете подобрать подходящее оборудование из-за
                      сложностей инженерингового решения?{" "}
                    </h4>
                  </div>
                  <div className="coop_picture"></div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "500px" }}>
              <h1>Доверьтесь Профессионалам</h1>
              <div className="global_coop">
                <div className="global_adv">
                  <div className="global_info">
                    <h2>Поиск</h2>
                    <h4>
                      Вы ищете редкий станок для чистого экологического
                      производства?
                    </h4>
                  </div>
                  <div className="coop_picture"></div>
                </div>
                <div className="global_adv">
                  <div className="global_info">
                    <h2>Убывающий бюджет</h2>
                    <h4>
                      В поиске вариантов экономии и сохранения и без того
                      убывающего бюджета?
                    </h4>
                  </div>
                  <div className="coop_picture"></div>
                </div>
                <div className="global_adv">
                  <div className="global_info">
                    <h2>Сложности</h2>
                    <h4>
                      Не можете подобрать подходящее оборудование из-за
                      сложностей инженерингового решения?{" "}
                    </h4>
                  </div>
                  <div className="coop_picture"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="coop_partners">
            <h1>Официальные партнеры</h1>
            <div className="kons_list">
              <img src={firstKons} alt="" className="kons_partners" />
              <img src={firstKons} alt="" className="kons_partners" />
              <img src={firstKons} alt="" className="kons_partners" />
              <img src={firstKons} alt="" className="kons_partners" />
              <img src={firstKons} alt="" className="kons_partners" />
              <img src={firstKons} alt="" className="kons_partners" />
              <img src={firstKons} alt="" className="kons_partners" />
              <img src={firstKons} alt="" className="kons_partners" />
              <img src={firstKons} alt="" className="kons_partners" />
            </div>
          </div>
        </div>
      </MainLayout>

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
