import React, { useState, useEffect } from "react";
import "../../styles/Slider.css";
import { Facebook } from "../container/Footer/FooterSvg";
import rights from "../../images/rights.svg";
import lefts from "../../images/lefts.svg";

const data = [
  {
    id: "01",
    image: "/park.jpg",
    title: "Экотехнопарк",
    text: "Создание полностью автономного инновационного Экотехнопарка и Агропромышленного комплекса ",
    info: "Проект предусматривает реализацию экологическим консорциумом ОсОО «Эко Решения», ООО «НПО «ОМЕГА» и ПЭУ «Бишкекводоканал»",
  },
  {
    id: "02",
    image: "/jadal.jpg",
    title: "Экотехнопарк Жалал-Абад",
    text: "Создание полностью автономного инновационного Экотехнопарка и Агропромышленного комплекса на основе очистных сооружений города Жалал-Абад ",
    info: "Проект предусматривает реализацию экологическим консорциумом ОсОО «Эко Решения», ООО «НПО «ОМЕГА» и ПЭУ «Жалал-Абад Водоканал»",
  },
  {
    id: "03",
    image: "/waste.jpg",
    title: "Технологии переработки отходов",
    text: "Автономные",
    info: "Не требуют подключения к инженерным сетям, не требуют фундамента",
  },
];

export default function Sliders(props) {
  const [slide] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slide.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slide]);

  // useEffect(() => {
  //   let sliderr = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 5000);
  //   return () => {
  //     clearInterval(sliderr);
  //   };
  // }, [index]);

  return (
    <div>
      <section className="section">
        <div className="slider_section" {...props}>
          {slide.map((item, indexItem) => {
            const { id, title, image, text, info } = item;
            let position = "nextSlide";
            if (indexItem === index) {
              position = "activeSlide";
            }
            if (
              indexItem === index - 1 ||
              (index === 0 && indexItem === slide.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <>
                <article className={position} key={id}>
                  <div className="slider">
                    <div className="first_eko">
                      <p>{id}</p>
                      <h2>{title}</h2>
                      <div className="info_slider_text">
                        <span style={{ fontSize: "18px" }}>
                          <strong>{text}</strong> <br /> <br />
                        </span>
                        <span
                          className="info_text"
                          style={{ fontSize: "15px" }}
                        >
                          {info}
                        </span>
                      </div>
                      <button className="button_more">Узнать больше</button>
                      <div className="bottom_of_first_part">
                        <div className="count_of_slide">
                          <h3>
                            {id} / 0{slide.length}
                          </h3>
                        </div>
                        <div className="next_prev_button">
                          <img
                            src={lefts}
                            className="prev"
                            onClick={() => setIndex(index - 1)}
                          />
                          <img
                            src={rights}
                            className="next"
                            onClick={() => setIndex(index + 1)}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="second_eko"
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>
                  </div>
                </article>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}
