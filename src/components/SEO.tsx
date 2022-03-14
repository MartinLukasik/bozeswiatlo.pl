import React from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  title?: string
  description?: string
}

export function SEO({ title, description }: Props) {
  return (
    <Helmet>
      <title>
        {title || 'Христианская церковь в городе Люблин | Boże Światło'}
      </title>
      <meta
        name="description"
        content={
          description ||
          'Церковь Божий Свет это христианская пятидесятническая община в городе Люблин, мы всегда открыты для новых людей'
        }
      />
    </Helmet>
  )
}
