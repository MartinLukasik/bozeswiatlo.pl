import { Link } from 'gatsby'
import React from 'react'
import invitation from '../../data/invitation.json'

export function AboutUs() {
  return (
    <section className="about container">
      <div className="section-title-container" data-aos="zoom-in">
        <h2 className="section-title">{invitation.title}</h2>
        <p className="section-subtitle">{invitation.subtitle}</p>
      </div>
      <div className="row">
        <div className="col-xs-12 col-lg-6" data-aos="fade-right">
          <img className="about-image" src="/img/about.webp" alt="" />
        </div>
        <div className="col-xs-12 col-lg-6 row middle-xs">
          <div className="about-content">
            <p className="p" data-aos="zoom-in">
              {invitation.text}
            </p>
            <div data-aos="bounce">
              <Link className="btn-primary" to="/about">
                Дізнатись більше
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
