import { Link } from 'gatsby'
import React from 'react'

export function AboutUs() {
  return (
    <section className="about container">
      <div className="section-title-container" data-aos="zoom-in">
        <h2 className="section-title">Добро пожаловать в нашу Церковь</h2>
        <p className="section-subtitle">Искренность. Верность. Жертвенность.</p>
      </div>
      <div className="row">
        <div className="col-xs-12 col-lg-6" data-aos="fade-right">
          <img className="about-image" src="/img/about.webp" alt="" />
        </div>
        <div className="col-xs-12 col-lg-6 row middle-xs">
          <div className="about-content">
            <p className="p" data-aos="zoom-in">
              Мы миссионерская церковь, стремимся к искренности в отношениях,
              верности к Богу, и жертвенности к людям, которые вырабатываются
              годами. Мы сами выбираем направление нашей жизни, и это
              направление будет не в том, чтобы стать успешным, знаменитым, и
              чтобы в жизни все получилось. Когда ты отдаешь свою жизнь Иисусу
              Христу, не для того, чтобы Он устроил твою жизнь, а с пониманием
              того, что Он может изменить твой характер. И тогда ты можешь стать
              – искренним, верным и жертвенный.
            </p>
            <div data-aos="bounce">
              <Link className="btn-primary" to="/about">
                Узнать больше
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
