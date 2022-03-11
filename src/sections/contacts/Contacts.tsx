import React from 'react'

export function Contacts() {
  return (
    <section className="contact" data-aos="zoom-in">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">Контактная информация</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4 contact-entry">
            <p>
              Адрес: <span>Lubartowska 39, Lublin</span>
            </p>
          </div>
          <div className="col-xs-12 col-md-4 contact-entry">
            <p>
              Телефон: <span>+48 796 922 453</span>
            </p>
          </div>
          <div className="col-xs-12 col-md-4 contact-entry">
            <p>
              Электронная почта: <span>bozeswiatlolublin@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
