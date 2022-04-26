import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import ministries from '../../data/ministries'

export function Ministries() {
  return (
    <section className="ministries">
      <div className="section-title-container" data-aos="zoom-in">
        <h2 className="section-title">{ministries.title}</h2>
        <p className="section-subtitle">{ministries.subtitle}</p>
      </div>
      <div className="row center-xs cols-fixed no-gutters">
        {ministries.ministries.map((ministry, index) => (
          <div
            key={ministry.title}
            className="m-card col-xs"
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
          >
            <div
              className="m-card-thumbnail"
              style={{
                backgroundImage: `url(${ministries.ministries[index].imageSrc})`,
              }}
            ></div>
            <div className="m-card-info">
              <h2 className="m-card-title">
                {ministries.ministries[index].title}
              </h2>
              <h3 className="m-card-date icon-pop">
                <img
                  className="svg-left"
                  src="svg/calendar-month.svg"
                  alt=""
                  height="18"
                  width="18"
                />
                {ministries.ministries[index].when}
              </h3>
              <h3 className="m-card-time icon-pop">
                <img
                  className="svg-left"
                  src="svg/clock-outline.svg"
                  alt=""
                  height="18"
                  width="18"
                />
                {ministries.ministries[index].time}
              </h3>
              <h3 className="m-card-location icon-pop">
                <img
                  className="svg-left"
                  src="svg/map-marker.svg"
                  alt=""
                  height="18"
                  width="18"
                />
                {ministries.ministries[index].address}
              </h3>
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                className="txt markdown"
              >
                {ministries.ministries[index].description}
              </ReactMarkdown>
              <AnchorLink className="m-card-link" to="/ministries#first">
                Деталі
              </AnchorLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
