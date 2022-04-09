import React from 'react'
import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'

const MINISTRIES = [
  {
    id: 'first',
    title: 'Воскресное служение',
    imageSrc: '/img/gallery/31.webp',
    text: `Воскресное собрание проходить согласно протестантской
          традиции. Начинаем служение с пару песен прославления, где мы
          можем славить и благодарить нашего Творца. После чего следует
          словоучение основанное на здравом смысле и священном писании.
          По прошедствии служения мы обычно имеем возможность пообщаться
          за чашкой чая с вкуснейшеми бутербродами и печеньками.`,
  },
  {
    id: 'second',
    title: 'Общая молитва',
    imageSrc: '/img/gallery/32.webp',
    text: `Время общих молитв мы посвящаем на совместную молитву Господу
          (мы искренне верим, что он нас слышит) и деление
          свидетельствами с прошедшей недели, также мы ведём тетрадь
          нужд куда записуем наши просьбы и благодарения Богу за
          исполненние нужды (слава Богу у нас нет в них недостатка)
          нашему Спасителю.`,
  },
  {
    id: 'third',
    title: 'Домашняя группа',
    imageSrc: '/img/gallery/33.webp',
    text: `Домашние группы предназначены для просто дружеского общения и
          разбора конкретных глав Библии, на них мы делимся как у нас
          прошла неделя и также пытаемся розяснить неясные отрывки из
          прочитанного в священном писании.`,
  },
  {
    id: 'fourth',
    title: 'Женское служение',
    imageSrc: '/img/gallery/34.webp',
    text: ``,
  },
  {
    id: 'fifth',
    title: 'Молодежное собрание',
    imageSrc: '/img/gallery/35.webp',
    text: `На молодёжках мы проводим дискуссии на различные
          интеллектуальные и не очень темы, играем в самые интересные
          командные либо настольные игры, ну и конечно все это время нас
          сопровождает вкуснейшее бесплатное угощение.`,
  },
  {
    id: 'sixth',
    title: 'Евангелизация',
    imageSrc: '/img/gallery/36.webp',
    text: `Пятничные евангелизации это особо важные события, мы
          собираемся в центре города (обычно на литовской площади в
          Люблине) и просто поем под гитару христианские песни, когда
          кто-то из прохожих интересуется кто мы такие и что здесь
          делаем, мы расказуем ему про нашу церковь и с радостью
          отвечаем на все задаваемые вопросы.`,
  },
]

export default function Ministries() {
  return (
    <section>
      <div className="section-title-container">
        <h2 className="section-title">Служения</h2>
        <p className="section-subtitle">
          Информация о проводимых Церковью служениях и мероприятиях
        </p>
      </div>
      <LightGallery
        elementClassNames="container ministry-slider"
        speed={500}
        plugins={[lgThumbnail]}
      >
        {MINISTRIES.map((ministry, index) => (
          <a
            key={ministry.title}
            href={ministry.imageSrc}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <article id={`${index + 1}`} className="ministry">
              <img className="ministry-img" src={ministry.imageSrc} alt="" />
              <div className="ministry-text">
                <h2 className="ministry-title">{ministry.title}</h2>
                <p className="p">{ministry.text}</p>
              </div>
            </article>
          </a>
        ))}
      </LightGallery>
    </section>
  )
}