import React from 'react'
import contactInfo from '../../data/contact-info.json'

export function Contacts() {
  return (
    <section className="contact" data-aos="zoom-in">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">Контактна інформація</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-3 contact-entry">
            <p>
              Адреса: <span>{contactInfo.address}</span>
            </p>
          </div>
          <div className="col-xs-12 col-md-3 contact-entry">
            <p>
              Телефон: <span>{contactInfo.tel}</span>
            </p>
          </div>
          <div className="col-xs-12 col-md-3 contact-entry">
            <p>
              Електронна пошта: <span>{contactInfo.email}</span>
            </p>
          </div>
          <div className="col-xs-12 col-md-3 contact-entry">
            <p>
              Інстаграм: <span>{contactInfo.instagram}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
