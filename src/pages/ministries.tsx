import React from 'react'
import { SEO } from '../components/SEO'
import '../sass/ministries.scss'
import Ministries from '../sections/ministries/Ministries'

export default function MinistriesPage() {
  return (
    <main>
      <SEO title="Служения церкви, расписания служений | Христианская церковь Boże Światło" />
      <Ministries />
    </main>
  )
}
