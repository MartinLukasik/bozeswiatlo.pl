import React from 'react'
import { AboutUs } from '../sections/about/AboutUs'
import { BankDetails } from '../sections/about/BankDetails'
import { Team } from '../sections/about/Team'
import '../sass/about.scss'
import { SEO } from '../components/SEO'

export default function AboutPage() {
  return (
    <main className="container">
      <SEO title="О нас, Кто мы такие | Христианская церковь Boże Światło" />
      <AboutUs />
      <Team />
      <BankDetails />
    </main>
  )
}
