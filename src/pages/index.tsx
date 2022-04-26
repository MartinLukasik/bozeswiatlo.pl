import React, { useEffect } from 'react'
import { FullscreenSlider } from '../sections/index/FullscreenSlider'
import { Gallery } from '../sections/index/Gallery'
import { Ministries } from '../sections/index/Ministries'
import { BibleQuote } from '../sections/index/BibleQuote'
import { AboutUs } from '../sections/index/AboutUs'
import '../sass/home.scss'
import { SEO } from '../components/SEO'

const IndexPage = () => {
  useEffect(() => {
    import('../js/main-page.js')
  }, [])

  return (
    <main>
      <SEO />
      <FullscreenSlider />
      <AboutUs />
      <Ministries />
      <BibleQuote />
      <Gallery />
    </main>
  )
}

export default IndexPage
