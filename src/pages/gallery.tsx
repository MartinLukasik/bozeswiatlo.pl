import React from 'react'
import { Gallery } from '../sections/gallery/Gallery'
import '../sass/gallery.scss'
import { SEO } from '../components/SEO'
import seo from '../data/seo.json'

export default function GalleryPage() {
  return (
    <main className="container">
      <SEO title={seo['gallery'].title} />
      <Gallery />
    </main>
  )
}
