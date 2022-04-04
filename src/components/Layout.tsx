import React, { ReactElement, useEffect } from 'react'
import { PageProps } from 'gatsby'
import AOS from 'aos'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import '../sass/main.scss'
import 'aos/dist/aos.css'

export function Layout(props: PageProps & { '*': string }) {
  useEffect(() => {
    AOS.init()
  }, [])

  if (typeof window === 'undefined') {
    return null
  }

  return (
    <div className="page-wrapper">
      <Header path={props.path} />
      {props.children}
      <Footer />
    </div>
  )
}
