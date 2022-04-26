import React from 'react'
import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'

export function Gallery() {
  return (
    <LightGallery
      elementClassNames="mp-gallery"
      speed={500}
      plugins={[lgThumbnail]}
    >
      <a href="/img/ministries/1.jpg">
        <img src="/img/ministries/1.jpg" alt="" height="300" />
      </a>
      <a href="/img/ministries/2.jpeg">
        <img src="/img/ministries/2.jpeg" alt="" height="300" />
      </a>
      <a href="/img/ministries/4.jpeg">
        <img src="/img/ministries/4.jpeg" alt="" height="300" />
      </a>
      <a href="/img/ministries/5.jpg">
        <img src="/img/ministries/5.jpg" alt="" height="300" />
      </a>
    </LightGallery>
  )
}
