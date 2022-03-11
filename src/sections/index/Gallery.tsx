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
      <a href="/img/gallery/1.webp">
        <img src="/img/gallery/1.webp" alt="" height="300" />
      </a>
      <a href="/img/gallery/2.webp">
        <img src="/img/gallery/2.webp" alt="" height="300" />
      </a>
      <a href="/img/gallery/3.webp">
        <img src="/img/gallery/3.webp" alt="" height="300" />
      </a>
      <a href="/img/gallery/4.webp">
        <img src="/img/gallery/4.webp" alt="" height="300" />
      </a>
    </LightGallery>
  )
}
