import React from 'react'
import { AboutUs } from '../sections/about/AboutUs'
import { BankDetails } from '../sections/about/BankDetails'
import '../sass/about.scss'
import { SEO } from '../components/SEO'
import seo from '../data/seo.json'

export default function AboutPage() {
  return (
    <main className="container">
      <SEO title={seo['about'].title} />
      <AboutUs />
      <BankDetails />
    </main>
  )
}
