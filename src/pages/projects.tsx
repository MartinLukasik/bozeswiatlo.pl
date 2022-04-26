import React from 'react'
import { SEO } from '../components/SEO'
import '../sass/testimonials.scss'
import seo from '../data/seo.json'

export default function ProjectsPage() {
  return (
    <main>
      <SEO title={seo['projects'].title} />
    </main>
  )
}
