import React from 'react'
import LightGallery from 'lightgallery/react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import ministries from '../../data/ministries'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'

export default function Ministries() {
  return (
    <section>
      <div className="section-title-container">
        <h2 className="section-title">Служіння</h2>
        <p className="section-subtitle">
          Інформація про служіння та заходи, що проводяться церквою
        </p>
      </div>
      <LightGallery
        elementClassNames="container ministry-slider"
        speed={500}
        plugins={[lgThumbnail]}
      >
        {ministries.ministries.map((ministry, index) => (
          <a
            key={ministry.title}
            href={ministry.imageSrc}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <article id={`${index + 1}`} className="ministry">
              <img className="ministry-img" src={ministry.imageSrc} alt="" />
              <div className="ministry-text">
                <h2 className="ministry-title">{ministry.title}</h2>
                <ReactMarkdown rehypePlugins={[rehypeRaw]} className="">
                  {ministry.longDescription}
                </ReactMarkdown>
              </div>
            </article>
          </a>
        ))}
      </LightGallery>
    </section>
  )
}
