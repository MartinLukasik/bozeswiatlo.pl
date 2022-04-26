import React from 'react'
import { SEO } from '../components/SEO'
import { Contacts } from '../sections/contacts/Contacts'
import seo from '../data/seo.json'

export default function ContactPage() {
  return (
    <main>
      <SEO title={seo['contacts'].title} />
      <Contacts />
    </main>
  )
}
