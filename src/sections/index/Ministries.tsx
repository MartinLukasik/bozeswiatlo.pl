import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

export function Ministries() {
  return (
    <section className="ministries">
      <div className="section-title-container" data-aos="zoom-in">
        <h2 className="section-title">Служения</h2>
        <p className="section-subtitle">
          Мы регулярно собираемся, чтобы вместе проводить время для молитвы,
          общения и назидания
        </p>
      </div>
      <div className="row center-xs cols-fixed no-gutters">
        <div className="m-card col-xs" data-aos="zoom-in">
          <div
            className="m-card-thumbnail"
            style={{ backgroundImage: 'url(/img/gallery/31.webp)' }}
          ></div>
          <div className="m-card-info">
            <h2 className="m-card-title">Воскресное собрание</h2>
            <h3 className="m-card-date icon-pop">
              <img
                className="svg-left"
                src="svg/calendar-month.svg"
                alt=""
                height="18"
                width="18"
              />
              Каждое воскресение
            </h3>
            <h3 className="m-card-time icon-pop">
              <img
                className="svg-left"
                src="svg/clock-outline.svg"
                alt=""
                height="18"
                width="18"
              />
              11:00
            </h3>
            <h3 className="m-card-location icon-pop">
              <img
                className="svg-left"
                src="svg/map-marker.svg"
                alt=""
                height="18"
                width="18"
              />
              Lubartowska 39
            </h3>
            <p className="txt">
              Воскресное собрание проходить согласно протестантской традиции.
              Начинаем служение с пару песен прославления, где мы можем славить
              и благодарить нашего Творца. После чего следует словоучение
              основанное на здравом смысле и священном писании. По прошедствии
              служения мы обычно имеем возможность пообщаться за чашкой чая с
              вкуснейшеми бутербродами и печеньками.
            </p>
            <AnchorLink className="m-card-link" to="/ministries#first">
              Детали
            </AnchorLink>
          </div>
        </div>

        <div className="m-card col-xs" data-aos="zoom-in" data-aos-delay="200">
          <div
            className="m-card-thumbnail"
            style={{ backgroundImage: 'url(/img/gallery/32.webp)' }}
          ></div>
          <div className="m-card-info">
            <h2 className="m-card-title">Общая молитва</h2>
            <h3 className="m-card-date icon-pop">
              <img
                className="svg-left"
                src="svg/calendar-month.svg"
                alt=""
                height="18"
                width="18"
              />
              По понедельникам
            </h3>
            <h3 className="m-card-time icon-pop">
              <img
                className="svg-left"
                src="svg/clock-outline.svg"
                alt=""
                height="18"
                width="18"
              />
              19:00
            </h3>
            <h3 className="m-card-location icon-pop">
              <img
                className="svg-left"
                src="svg/map-marker.svg"
                alt=""
                height="18"
                width="18"
              />
              Żelazowej Woli 5/24
            </h3>
            <p className="txt">
              Время общих молитв мы посвящаем на совместную молитву Господу (мы
              искренне верим, что он нас слышит) и деление свидетельствами с
              прошедшей недели, также мы ведём тетрадь нужд куда записуем наши
              просьбы и благодарения Богу за исполненние нужды (слава Богу у нас
              нет в них недостатка) нашему Спасителю.
            </p>
            <AnchorLink className="m-card-link" to="/ministries#second">
              Детали
            </AnchorLink>
          </div>
        </div>

        <div className="m-card col-xs" data-aos="zoom-in" data-aos-delay="400">
          <div
            className="m-card-thumbnail"
            style={{ backgroundImage: 'url(/img/gallery/33.webp)' }}
          ></div>
          <div className="m-card-info">
            <h2 className="m-card-title">Домашняя группа</h2>
            <h3 className="m-card-date icon-pop">
              <img
                className="svg-left"
                src="svg/calendar-month.svg"
                alt=""
                height="18"
                width="18"
              />
              Каждый вторник
            </h3>
            <h3 className="m-card-time icon-pop">
              <img
                className="svg-left"
                src="svg/clock-outline.svg"
                alt=""
                height="18"
                width="18"
              />
              18:30
            </h3>
            <h3 className="m-card-location icon-pop">
              <img
                className="svg-left"
                src="svg/map-marker.svg"
                alt=""
                height="18"
                width="18"
              />
              Żelazowej Woli 5/24
            </h3>
            <p className="txt">
              Домашние группы предназначены для просто дружеского общения и
              разбора конкретных глав Библии, на них мы делимся как у нас прошла
              неделя и также пытаемся розяснить неясные отрывки из прочитанного
              в священном писании.
            </p>
            <AnchorLink className="m-card-link" to="/ministries#third">
              Детали
            </AnchorLink>
          </div>
        </div>

        <div className="m-card col-xs" data-aos="zoom-in">
          <div
            className="m-card-thumbnail"
            style={{ backgroundImage: 'url(/img/gallery/34.webp)' }}
          ></div>
          <div className="m-card-info">
            <h2 className="m-card-title">Женское служение</h2>
            <h3 className="m-card-date icon-pop">
              <img
                className="svg-left"
                src="svg/calendar-month.svg"
                alt=""
                height="18"
                width="18"
              />
              Каждую первую среду месяца
            </h3>
            <h3 className="m-card-time icon-pop">
              <img
                className="svg-left"
                src="svg/clock-outline.svg"
                alt=""
                height="18"
                width="18"
              />
              18:30
            </h3>
            <h3 className="m-card-location icon-pop">
              <img
                className="svg-left"
                src="svg/map-marker.svg"
                alt=""
                height="18"
                width="18"
              />
              Żelazowej Woli 5/24
            </h3>
            <p className="txt"></p>
            <AnchorLink className="m-card-link" to="/ministries#fourth">
              Детали
            </AnchorLink>
          </div>
        </div>

        <div className="m-card col-xs" data-aos="zoom-in" data-aos-delay="200">
          <div
            className="m-card-thumbnail"
            style={{ backgroundImage: 'url(/img/gallery/35.webp)' }}
          ></div>
          <div className="m-card-info">
            <h2 className="m-card-title">Молодежное служение</h2>
            <h3 className="m-card-date icon-pop">
              <img
                className="svg-left"
                src="svg/calendar-month.svg"
                alt=""
                height="18"
                width="18"
              />
              Каждую субботу
            </h3>
            <h3 className="m-card-time icon-pop">
              <img
                className="svg-left"
                src="svg/clock-outline.svg"
                alt=""
                height="18"
                width="18"
              />
              18:30
            </h3>
            <h3 className="m-card-location icon-pop">
              <img
                className="svg-left"
                src="svg/map-marker.svg"
                alt=""
                height="18"
                width="18"
              />
              Lubartowska 39
            </h3>
            <p className="txt">
              На молодёжках мы проводим дискуссии на различные интеллектуальные
              и не очень темы, играем в самые интересные командные либо
              настольные игры, ну и конечно все это время нас сопровождает
              вкуснейшее бесплатное угощение.
            </p>
            <AnchorLink className="m-card-link" to="/ministries#fifth">
              Детали
            </AnchorLink>
          </div>
        </div>

        <div className="m-card col-xs" data-aos="zoom-in" data-aos-delay="400">
          <div
            className="m-card-thumbnail"
            style={{ backgroundImage: 'url(/img/gallery/36.webp)' }}
          ></div>
          <div className="m-card-info">
            <h2 className="m-card-title">Уличная евангелизация</h2>
            <h3 className="m-card-date icon-pop">
              <img
                className="svg-left"
                src="svg/calendar-month.svg"
                alt=""
                height="18"
                width="18"
              />
              Каждую Пятницу
            </h3>
            <h3 className="m-card-time icon-pop">
              <img
                className="svg-left"
                src="svg/clock-outline.svg"
                alt=""
                height="18"
                width="18"
              />
              18:30
            </h3>
            <h3 className="m-card-location icon-pop">
              <img
                className="svg-left"
                src="svg/map-marker.svg"
                alt=""
                height="18"
                width="18"
              />
              Plac Litewski
            </h3>
            <p className="txt">
              Пятничные евангелизации это особо важные события, мы собираемся в
              центре города (обычно на литовской площади в Люблине) и просто
              поем под гитару христианские песни, когда кто-то из прохожих
              интересуется кто мы такие и что здесь делаем, мы расказуем ему про
              нашу церковь и с радостью отвечаем на все задаваемые вопросы.
            </p>
            <AnchorLink className="m-card-link" to="/ministries#sixth">
              Детали
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  )
}
