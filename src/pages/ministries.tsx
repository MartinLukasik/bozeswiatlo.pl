import React from 'react'
import { SEO } from '../components/SEO'
import '../sass/ministries.scss'
import Ministries from '../sections/ministries/Ministries'
import seo from '../data/seo.json'

export default function MinistriesPage() {
  return (
    <main>
      <SEO title={seo['ministries'].title} />
      <Ministries />
    </main>
  )
}
