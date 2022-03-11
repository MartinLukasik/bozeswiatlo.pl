import React, { useEffect } from 'react'
import { FullscreenSlider } from '../sections/index/FullscreenSlider'
import { Gallery } from '../sections/index/Gallery'
import { Ministries } from '../sections/index/Ministries'
import { Social } from '../sections/index/Social'
import { BibleQuote } from '../sections/index/BibleQuote'
import { AboutUs } from '../sections/index/AboutUs'
import '../sass/home.scss'

const IndexPage = () => {
  useEffect(() => {
    import('../js/main-page.js')
  }, [])

  return (
    <main>
      <FullscreenSlider />
      <AboutUs />
      <Ministries />
      <Social />
      <BibleQuote />
      <Gallery />
    </main>
  )
}

export default IndexPage
