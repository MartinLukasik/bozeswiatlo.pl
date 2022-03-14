import React from 'react'
import { SEO } from '../components/SEO'
import { Contacts } from '../sections/contacts/Contacts'

export default function ContactPage() {
  return (
    <main>
      <SEO title="Контакты, как найти нас | Христианская церковь Boże Światło" />
      <Contacts />
    </main>
  )
}
