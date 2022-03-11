import React from 'react'
import { AboutUs } from '../sections/about/AboutUs'
import { BankDetails } from '../sections/about/BankDetails'
import { Team } from '../sections/about/Team'
import '../sass/about.scss'

export default function AboutPage() {
  return (
    <main className="container">
      <AboutUs />
      <Team />
      <BankDetails />
    </main>
  )
}
