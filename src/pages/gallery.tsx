import React from 'react'
import { Gallery } from '../sections/gallery/Gallery'
import '../sass/gallery.scss'
import { SEO } from '../components/SEO'

export default function GalleryPage() {
  return (
    <main className="container">
      <SEO title="Галерея | Христианская церковь Boże Światło" />
      <Gallery />
    </main>
  )
}
