import React from 'react'
import { Helmet } from 'react-helmet'
import seo from '../data/seo.json'

type Props = {
  title?: string
  description?: string
}

export function SEO({ title, description }: Props) {
  return (
    <Helmet>
      <title>{title || seo['default'].title}</title>
      <meta
        name="description"
        content={description || seo['default'].description}
      />
    </Helmet>
  )
}
