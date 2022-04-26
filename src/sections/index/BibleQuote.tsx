import React, { useEffect, useState } from 'react'
import bibleVerses from '../../data/bible-verses.json'

export function BibleQuote() {
  const [index, setIndex] = useState(
    Math.floor(Math.random() * bibleVerses.length)
  )
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((index + 1) % bibleVerses.length)
    }, 10_000)
    return () => {
      clearInterval(id)
    }
  }, [index, setIndex])

  return (
    <div className="quote">
      <div className="container">
        <div className="quote-quote">{bibleVerses[index].quote}</div>
        <div className="quote-icon">
          <img src="/img/quote-icon.webp" alt="" />
        </div>
        <div className="quote-src">{bibleVerses[index].src}</div>
      </div>
    </div>
  )
}
